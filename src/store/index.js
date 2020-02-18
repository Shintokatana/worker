import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import Cookie from 'js-cookie'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const vuexPersist = new VuexPersist({
    key: 'worker-app',
    storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        isAuth: Cookie.get('authToken'),
        users: {},
		token: Cookie.get('authToken')
    },
    mutations: mutations,
    actions: actions,
    getters: getters,
    plugins: [vuexPersist.plugin]
})
