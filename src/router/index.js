import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '@/views/Login'
import store from '@/store'

import MainView from '@/views/MainView'
import Employers from '@/views/Employers'
import Employees from '@/views/Employees'
import CreateUsers from "@/views/CreateUsers";

Vue.use(VueRouter);

let routes = [
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
                path: '/employer',
                name: 'Employers',
                component: Employers
            },
            {
                path: '/employee',
                name: 'Employees',
                component: Employees
            },
            {
                path: '/test-users',
                name: 'Test Users',
                component: CreateUsers
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
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: routes
});


export default router
