import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/Root.layout';
import StartRoute from '@/routes/Start.route';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        //errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <StartRoute />,
            },
        ],
    },
]);

export { AppRouter };
