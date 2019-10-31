import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//require normalize css file
require('normalize.css');
//require scss files
require('@/assets/assets.scss');

import {ClientTable} from 'vue-tables-2';
Vue.use(ClientTable);

Vue.config.productionTip = false;

let app = '';

if (!app) {
    app = new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
}
