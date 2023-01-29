import '@/scss/common/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/router/appRouter';
import { store } from './app/store';
import { Provider as StoreProvider } from 'react-redux';

/**
 *
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={appRouter} />
        </StoreProvider>
    </React.StrictMode>
);
