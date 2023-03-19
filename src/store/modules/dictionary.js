import { ajaxGet } from "@/ajax"
import { dicts } from '@/common/constants'

const state = () => ({
    dicts
});

const getters = {
    dicts: state => {
        return state.dicts;
    },
};

const mutations = {
    dictadd(state, payload) {
        state.dicts[payload.dict].data.push(payload.data);
    },

    dictreplace(state, payload) {
        state.dicts[payload.dict].data[payload.index] = payload.data;
    },

    dictremove(state, payload) {
        state.dicts[payload.dict].data.splice(payload.index, 1);
    },
};

const actions = {
    getdict({ state }, dict) {
        if(!state.dicts.hasOwnProperty(dict))
            return;
            
        state.dicts[dict]["loading"] = true;
        ajaxGet(state.dicts[dict].hasOwnProperty("path") && state.dicts[dict].path ? state.dicts[dict].path : "dictionaries/" + dict,
            null, response => {
                if (Array.isArray(response.data)) {
                    if (!state.dicts[dict].hasOwnProperty("parse") || state.dicts[dict].parse)
                        response.data = response.data.map(val => ({
                            value: val.id,
                            title: val.name,
                        }));

                    state.dicts[dict] = { ...state.dicts[dict], loading: false, data: response.data };

                    if (state.dicts[dict].resolveCallback) {
                        state.dicts[dict].resolveCallback(state.dicts[dict]);
                    }
                } else
                    state.dicts[dict] = { ...state.dicts[dict], loading: false, data: [] };
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};