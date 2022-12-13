import { fileURLToPath, URL } from 'node:url';
// @ts-ignore
import vsharp from 'vite-plugin-vsharp';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vsharp()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 7777,
    },
    base: './',
});
