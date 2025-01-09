import '../css/app.css'; // Import your CSS
import './bootstrap'; // Load bootstrap.js for Laravel
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import 'summernote/dist/summernote-bs5.css';
import React from 'react';

// Define application name
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Create Inertia.js application
createInertiaApp({
    // Customize title format
    title: (title) => (title ? `${title} - ${appName}` : appName),

    // Resolve components dynamically
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx') // Glob all pages
        ),

    // App setup function
    setup({ el, App, props }) {
        
        const root = createRoot(el);

        // Render application root with props
        root.render(React.createElement(App, props));
    },

    // Progress bar customization
    progress: {
        color: '#4B5563', // Dark gray color
        showSpinner: true, // Show a spinner
    },
});
