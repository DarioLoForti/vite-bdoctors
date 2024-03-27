import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import SearchPage from './pages/SearchPage.vue';
import DoctorPage from './pages/DoctorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/search',
            name: 'search',
            component: SearchPage
        },
        {
            path: '/doctor/:slug',
            name: 'doctor',
            component: DoctorPage
        }
    ]
});
export { router }