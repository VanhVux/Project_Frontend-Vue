import VueX from "vuex";

export default new VueX.Store({
    state: {
        user: null,
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        }
    },
})