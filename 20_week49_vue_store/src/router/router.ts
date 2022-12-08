import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView,
        },
        {
            path: '/products/:id',
            name: 'product',
            component: ProductsView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export { router };
