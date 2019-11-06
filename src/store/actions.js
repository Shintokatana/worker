import Cookie from 'js-cookie'

export default {

    logoutUser({commit}, payload) {
        //logout api request
        if (Cookie.get('authToken')) {
            Cookie.remove('authToken');
        }
        commit('authStatusChange', payload);
    },

    loginUser({commit}, payload) {
        if (Cookie.get('authToken')) {
            Cookie.remove('authToken');
        }
        //Get From payload token
        Cookie.set('authToken', true, {expires: 7});
        commit('authStatusChange', payload);
    },

    getUsers({commit}, payload) {
        //api call here
        commit('getUsers', payload);
    }
}
