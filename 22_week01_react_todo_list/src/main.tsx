import '@/scss/common/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '@/firebase/firebaseConfig';
import App from '@/App';

/**
 *
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <App />
        </FirebaseAppProvider>
    </React.StrictMode>
);
