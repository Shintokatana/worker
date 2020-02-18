import Cookie from 'js-cookie';
import axios from 'axios';
import router from '@/router';
import api from '@/api';

export default {

	logoutUser({commit}, payload) {
		//logout api request
		if (Cookie.get('authToken')) {
			Cookie.remove('authToken');
		}
		commit('authStatusChange', payload);
	},

	loginUser({commit}, payload) {
		return axios.post(`${api.basicUrl}/login`, {
			email: payload.email,
			password: payload.password
		}).then(res => {
			if (200 === res.status) {
				Cookie.set('authToken', res.data['access_token'].token, {expires: 7});
				commit('authStatusChange', true);
				router.push('dashboard');
			}
		})
	},

	getUsers({commit}, payload) {
		//api call here
		commit('getUsers', payload);
	}
}
