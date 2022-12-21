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
import { useAdminStore } from '../stores/AdminStore';

enum Routes {
    INDEX = 'index',
    BLOG_ENTRY = 'blog_entry',
    LOGIN = 'login',
    ADMIN = 'admin',
    NOT_FOUND = 'not_found',
}

const requireAuth = (to: RouteLocation, from: RouteLocation, next: Function) => {
    const admin = useAdminStore();
    if (!admin.isLoggedIn) {
        next({ name: Routes.LOGIN });
    } else {
        next();
    }
};

const requireNotAuth = (to: RouteLocation, from: RouteLocation, next: Function) => {
    const admin = useAdminStore();
    if (admin.isLoggedIn) {
        next({ name: Routes.ADMIN });
    } else {
        next();
    }
};

const router: Router = createRouter(<RouterOptions>{
    history: createWebHistory('./'),
    routes: [
        {
            path: '/',
            name: Routes.INDEX,
            component: IndexView,
        },
        {
            path: '/entry/:id',
            name: Routes.BLOG_ENTRY,
            component: EntryView,
            props: true,
        },
        {
            path: '/login',
            name: Routes.LOGIN,
            component: LoginView,
            beforeEnter: requireNotAuth,
        },
        {
            path: '/admin',
            name: Routes.ADMIN,
            component: AdminView,
            beforeEnter: requireAuth,
        },
        {
            path: '/:pathMatch(.*)*',
            name: Routes.NOT_FOUND,
            component: NotFoundView,
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export { router, Routes };
