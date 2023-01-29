import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RouteID } from '@/router/appRouterTypes';
import { appRoutes } from '@/router/appRouterConfig';
import App from '@/App';
import ErrorPage from '@/components/routes/error/ErrorPage';
import RecordList from '@/components/routes/recordlist/RecordList';
import Admin from '@/components/routes/admin/Admin';
import RecordDetails from '@/components/routes/recorddetails/RecordDetails';
import Login from '@/components/routes/login/Login';
import Protected from '@/components/routes/protected/Protected';

/**
 *
 */
const appRouter = createBrowserRouter([
    {
        id: RouteID.ROOT,
        path: appRoutes.ROOT,
        element: <App />,
        children: [
            {
                id: RouteID.RECORD_LIST,
                index: true,
                element: <RecordList />,
            },
            {
                id: RouteID.RECORD_DETAILS,
                path: appRoutes.RECORD_DETAILS + ':id',
                element: <RecordDetails />,
            },
            {
                id: RouteID.LOGIN,
                path: appRoutes.LOGIN,
                element: <Login />,
            },
            {
                id: RouteID.ADMIN,
                path: appRoutes.ADMIN,
                element: (
                    <Protected>
                        <Admin />
                    </Protected>
                ),
                children: [
                    {
                        path: ':id',
                        element: null,
                    },
                ],
            },
            {
                id: RouteID.ERROR,
                path: appRoutes.ERROR,
                element: <ErrorPage errorType="404" />,
            },
        ],
        errorElement: <ErrorPage errorType="unexpected" />,
    },
]);

export { appRouter };
