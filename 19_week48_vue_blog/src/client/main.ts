globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

import App from './App.vue';
import { apiStore } from './stores/ApiStore';
import { createApp } from 'vue';
import { router } from './router/Router';
import './scss/common/main.scss';

apiStore.BASE_URL = process.env.API_BASE_URL || 'api/blog/';

createApp(App).use(router).mount('#app');
