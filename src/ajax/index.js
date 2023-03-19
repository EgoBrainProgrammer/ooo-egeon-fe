import axios from 'axios';
import store from "@/store";
import router from "@/router";
import { parseJwt } from "@/common/utils";
import { backend } from "@/config/session";
import { extractAnswerData } from "./utils";

axios.defaults.validateStatus = () => {
    return true;
};

function generateParams(route, data, callback) {
    return new Object({ route, data, callback });
}

function ajaxGetStatic(route, callback) {
    ajax(route, null, callback, false, null, "get", false);
}

function ajaxGet(route, data, callback, showError = false, options = null) {
    ajax(route, data, callback, showError, options, "get");
}

function ajaxPost(route, data, callback, showError = false, options = null) {
    ajax(route, data, callback, showError, options, "post");
}

function ajaxPut(route, data, callback, showError = false, options = null) {
    ajax(route, data, callback, showError, options, "put");
}

function ajaxPatch(route, data, callback, showError = false, options = null) {
    ajax(route, data, callback, showError, options, "patch");
}

function ajaxDel(route, data, callback, showError = false, options = null) {
    ajax(route, data, callback, showError, options, "delete");
}

function ajax(route, data, callback, showError, options, method = "post", api = true) {
    if (options == null)
        options = {};

    if (localStorage.token && localStorage.token.length > 0)
        Object.assign(options, {
            headers: options.headers ? Object.assign(options.headers, { Authorization: "Bearer " + localStorage.token }) : { Authorization: "Bearer " + localStorage.token }
        });

    let path = api ? backend.url : backend.origin;

    if (route)
        path += (route[0] == "/" ? "" : "/") + route;

    if (["get", "delete"].includes(method)) {
        options.params = data;
        data = options;
    }

    const proceedCallback = callback ? function (response, callback) {
        try {
            callback(extractAnswerData(response), null);
        }
        catch (ex) {
            console.error(ex);
        }
    } : null;

    const clearSession = function () {
        const curts = Math.round(new Date().getTime() / 1000);
        if (curts - store.state.session_exp_notified > 300) {
            // store.dispatch("snackbar", { message: i18n.global.t("SessionExpired"), type: "warn", duration: 60000 });
            store.state.session_exp_notified = Math.round(new Date().getTime() / 1000);
        }

        localStorage.removeItem("refresh_token");
        store.state.session_exp_notified = Math.round(new Date().getTime() / 1000);
        store.commit("setdefuser");
        router.push("/admin");
    }

    axios[method](path, data, options)
        .then(async response => {
            if (localStorage.refresh_token && [401, 422].includes(response.status)) {
                const curts = Math.round(new Date().getTime() / 1000);
                if (curts < localStorage.refresh_exp && curts > localStorage.expires_in) {
                    const refreshresp = await axios.post(backend.url + "/auth/refresh", {
                        refreshToken: localStorage.refresh_token
                    });

                    if (![200, 201].includes(refreshresp.status))
                        clearSession();
                    else {                        
                        const decoded = parseJwt(refreshresp.data.token);
                        const decodedRefresh = parseJwt(refreshresp.data.refreshToken);

                        store.dispatch("setSession", {
                            token: refreshresp.data.token,
                            exp: decoded.exp,
                            rtoken: response.data.refreshToken,
                            rexp: decodedRefresh.exp
                        });

                        Object.assign(options, {
                            headers: options.headers ? Object.assign(options.headers, 
                                { 
                                    Authorization: "Bearer " + 
                                    refreshresp.data.token }
                                ) : 
                                { 
                                    Authorization: "Bearer " + 
                                    refreshresp.data.token
                                }
                        });
                        response = await axios[method](path, data, options);
                    }
                } else
                    clearSession();
            }

            if (proceedCallback)
                if(api)
                    proceedCallback(response, callback);
                else
                    callback(response);
        })
        .catch(function (error) {
            callback(extractAnswerData(null), error);
            console.log(error + " Во время выполнения операции возникла непредвиденная ошибка. " + error);
        });
}

export { ajax, ajaxGet, ajaxGetStatic, ajaxPost, ajaxPut, ajaxPatch, ajaxDel, generateParams };