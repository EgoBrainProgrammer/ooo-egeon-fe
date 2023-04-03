import { backend } from '@/config/session'
import { ajaxGet } from '@/ajax'

const defSnackbar = {
    message: null,
    type: "success",
    duration: 5000,
};

const state = () => ({
    backend: backend.url,
	backendOnline: true,
	appLoading: true,

    session_exp_notified: Math.round(new Date().getTime() / 1000),
    snackbar: defSnackbar,
});

const getters = {
    systemName: () => {
        return process.env.VUE_APP_SYSTEMNAME;
    },

    orgName: () => {
        return process.env.VUE_APP_ORGANIZATIONNAME;
    },

    orgNameTitle: () => {
        //return process.env.VUE_APP_ORGANIZATIONNAMETITLE;
        //return ["Общество с ограниченной ответственностью", "«ЭГЕОН»"];
    },

    env: () => {
        return process.env.NODE_ENV;
    },

    snackbar: state => {
        return state.snackbar;
    },
};

const mutations = {
    switchBackendOnline(state) {
        state.backendOnline = !state.backendOnline;
    },

    appLoaded(state) {
        state.appLoading = false;
    },

    appLoading(state) {
        state.appLoading = true;
    },
};

const actions = {
    open(state, url) {
        window.open(url);
    },

    opentab(state, url) {
        window.open(url, '_blank').focus();
    },

    setSession(state, sessionData) {
        localStorage.setItem("token", sessionData.token);
        localStorage.setItem("expires_in", sessionData.exp);
        localStorage.setItem("refresh_token", sessionData.rtoken);
        localStorage.setItem("refresh_expires_in", sessionData.rexp);
    },

    storeShared(state, sharedData) {
        localStorage.setItem("shared", true);
        localStorage.setItem("sharedData", JSON.stringify(sharedData));
    },

    initApplication({ commit }, callback) {
        localStorage.setItem("shared", false);
        localStorage.removeItem("sharedData");
        ajaxGet("/auth/current", null, response => {
            if(response.status == 999)
                commit("switchBackendOnline");
            else {
                if([200, 201, 304].includes(response.status) && response.data.id > 0)
                    commit("setuser", { ...response.data });
                else
                    this.state.user.user.auth = false;

                this.dispatch("getAllDictionaries");
            }

            if(callback && typeof callback === "function")
                callback();
        });
    },

    snackbar({ state }, snackbar) {
        state.snackbar = Object.assign({ ...defSnackbar }, snackbar);
    },

	getAllDictionaries(state) {
		Object.keys(state.getters.dicts).forEach(x => {
			this.dispatch("getdict", x);
		});
	},
};

export default {
    state,
    getters,
    actions,
    mutations
};