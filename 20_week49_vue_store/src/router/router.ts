import { createRouter, createWebHistory, type RouteLocation } from 'vue-router';
import { Routes } from '@/router/enum/Routes';
import ParentView from '@/views/generic/ParentView.vue';
import HomeView from '@/views/home/HomeView.vue';
import NotFoundView from '@/views/error/NotFoundView.vue';
import ProductList from '@/components/products/ProductList.vue';
import ProductDetails from '@/components/products/ProductDetails.vue';
import BasketView from '@/views/checkout/BasketView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: Routes.HOME,
            component: HomeView,
        },
        {
            path: '/products',
            component: ParentView,
            children: [
                {
                    path: '',
                    name: Routes.PRODUCT_LIST,
                    component: ProductList,
                },
                {
                    path: '/products/:id',
                    name: Routes.PRODUCT_DETAILS,
                    component: ProductDetails,
                    props: true,
                },
                {
                    path: '/brands/:brand' /* TODO */,
                    name: Routes.BRAND,
                    component: ProductList,
                },
            ],
        },
        {
            path: '/basket',
            name: Routes.BASKET,
            component: BasketView,
        },
        {
            path: '/not-implemented',
            name: Routes.NOT_IMPLEMENTED,
            component: HomeView,
            beforeEnter: [() => false],
        },
        {
            path: '/:pathMatch(.*)*',
            name: Routes.NOT_FOUND,
            component: NotFoundView,
        },
    ],
    scrollBehavior(to: RouteLocation, from: RouteLocation, savedPosition: any | null) {
        return savedPosition || { top: 0 };
    },
});

export { router };
