import { confSession } from '@/config/session'
import router from '@/router'

const state = () => ({
    user: { ...confSession.defaultUser },
});

const getters = {
    user: state => {
        return state.user;
    },

    userFullName: state => {
        let result = "";
        if(state.user.lastname && state.user.lastname.length > 0)
            result += state.user.lastname;

        if(state.user.name && state.user.name.length > 0) {
            if(result.length > 0)
                result += " ";
            result += state.user.name;
        }

        if(state.user.patronymic && state.user.patronymic.length > 0) {
            if(result.length > 0)
                result += " ";
            result += state.user.patronymic;
        }

        return result; 
    },		
};

const mutations = {
    //--User mutations--
    setuser(state, user) {
        Object.assign(state.user, user);
        state.user.auth = true;
        this.dispatch("getAllDictionaries");
    },

    setdefuser(state) {
        state.user = { ...confSession.defaultUser };
    },

    logout(state) {
        state.user = { ...confSession.defaultUser };
        state.user.auth = false;
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("expires_in");      
        localStorage.removeItem("refresh_expires_in");
        //router.push("/login");
    },
}	

export default {
    state,
    getters,
    mutations
};