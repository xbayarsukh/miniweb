import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'resources/js/app.js', // Specify a single input file
            output: {
                manualChunks: undefined, // Disable code splitting
                entryFileNames: 'assets/app.js', // Single output file name
            },
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.js'], // Single entry point
            refresh: true,
        }),
        react(),
    ],
});
