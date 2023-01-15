import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        port: 7777,
    },
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    firestore: ['@firebase/firestore', 'reactfire'],
                    react: ['react', 'react-dom'],
                    dndkit: ['@dnd-kit/core', '@dnd-kit/modifiers', '@dnd-kit/sortable'],
                },
            },
        },
    },
});
