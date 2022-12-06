import { createRouter, createWebHistory, type Router, type RouterOptions } from 'vue-router';
import EntryView from '../views/EntryView.vue';
import IndexView from '../views/IndexView.vue';
import AdminView from '../views/AdminView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router: Router = createRouter(<RouterOptions>{
    history: createWebHistory('./'),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexView,
        },
        {
            path: '/entry/:id',
            name: 'Entry',
            component: EntryView,
            props: true,
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminView,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView,
        },
    ],
});

export { router };
