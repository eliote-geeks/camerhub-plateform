import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

type PageResolver = Parameters<typeof resolvePageComponent>[0];

type AppNameEnv = string | undefined;

const appName: string = (import.meta.env.VITE_APP_NAME as AppNameEnv) ?? 'Camerhub';

createInertiaApp({
    title: (title) => (title ? `${title} · ${appName}` : appName),
    resolve: (name: string) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4cc9f0',
    },
});
