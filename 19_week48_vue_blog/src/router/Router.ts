import {
    createRouter,
    createWebHistory,
    type RouteLocation,
    type Router,
    type RouterOptions,
} from 'vue-router';
import EntryView from '../views/EntryView.vue';
import IndexView from '../views/IndexView.vue';
import AdminView from '../views/AdminView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useUserStore } from '../stores/UserStore';

const requireAuth = (to: RouteLocation, from: RouteLocation, next: Function) => {
    const user = useUserStore();
    if (!user.isLoggedIn) {
        next({ name: 'Login' });
    } else {
        next();
    }
};

const requireNotAuth = (to: RouteLocation, from: RouteLocation, next: Function) => {
    const user = useUserStore();
    if (user.isLoggedIn) {
        next({ name: 'Admin' });
    } else {
        next();
    }
};

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
            path: '/login',
            name: 'Login',
            component: LoginView,
            beforeEnter: requireNotAuth,
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminView,
            beforeEnter: requireAuth,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView,
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export { router };
