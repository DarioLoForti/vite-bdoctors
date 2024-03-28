import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(router).mount('#app')
