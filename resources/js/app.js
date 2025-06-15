import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './components/dashboard.vue';
import App from './components/app.vue';
import Barang from './components/barang.vue';
import Jual from './components/jual.vue';
import Login from './components/login.vue';
import Register from './components/register.vue';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/barang', component: Barang },
    { path: '/jual', component: Jual },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#dashboard')