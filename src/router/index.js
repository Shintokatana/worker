import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '@/views/Login'
import store from '@/store'

import MainView from '@/views/MainView'
import Employers from '@/views/Employers'
import Employees from '@/views/Employees'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            component: Dashboard,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: MainView
                },
                {
                    path: '/employers',
                    name: 'employers',
                    component: Employers
                },
                {
                    path: '/employees',
                    name: 'employees',
                    component: Employees
                }
            ],
            beforeEnter: (to, from, next) => {
                if (store.state.isAuth) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter:(to, from, next) => {
                if (store.state.isAuth) {
                    next('/')
                } else {
                    next();
                }
            }
        }
    ]
});


export default router
