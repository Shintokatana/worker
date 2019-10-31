import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'worker-app',
    storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuth: false
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
    plugins: [vuexPersist.plugin]
})
