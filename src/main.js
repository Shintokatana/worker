import Vue from 'vue'
import {ClientTable} from 'vue-tables-2';

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
require('normalize.css');
require('@/assets/assets.scss');


Vue.use(ClientTable);

let app = '';

if (!app) {
    app = new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
}
