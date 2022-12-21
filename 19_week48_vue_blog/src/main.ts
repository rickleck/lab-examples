globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

import AppVue from './App.vue';
import { createPinia } from 'pinia';
import { createApp, type App } from 'vue';
import { router } from './router/Router';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import './scss/common/main.scss';

let app: App;
const pinia = createPinia();

onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(AppVue);
        app.use(pinia);
        app.use(router);
        app.mount('#app');
    }
});
