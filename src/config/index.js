import axios from 'axios'
import Cookies from 'js-cookie'

const workerAPI = axios.create({
    headers: {'Authorization': 'Bearer ' + Cookies.get('authToken')}
});

const workerAPIEndpoints = {
    endpoint: '/',
    loginEndpoint: '/api/login'
};

export {workerAPI, workerAPIEndpoints};
