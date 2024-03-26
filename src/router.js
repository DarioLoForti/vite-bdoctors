import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'

const route = createRouter({
    history: createWebHistory(),
    routers: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
    ]
})