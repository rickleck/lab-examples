import { createBrowserRouter } from 'react-router-dom';
import { dataAPI } from '@/data/dataAPI';
import { RouteID } from '@/router/types/RouteID';
import { appRoutes } from '@/router/appRoutes';
import { editorFormAction } from '@/components/gui/editor/Editor';
import Root from '@/components/layouts/Root';
import ErrorPage from '@/components/routes/error/ErrorPage';
import RecordList from '@/components/routes/recordlist/RecordList';
import Admin from '@/components/routes/admin/Admin';
import RecordDetails from '@/components/routes/recorddetails/RecordDetails';

/**
 *
 */
const appRouter = createBrowserRouter([
    {
        id: RouteID.ROOT,
        path: appRoutes.ROOT,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                id: RouteID.RECORD_LIST,
                index: true,
                element: <RecordList />,
                loader: async () => {
                    return await dataAPI().getAll();
                },
            },
            {
                id: RouteID.RECORD_DETAILS,
                path: appRoutes.RECORD_DETAILS + ':id',
                element: <RecordDetails />,
                loader: async ({ params }) => {
                    return await dataAPI().getByID(params.id!);
                },
            },
            {
                id: RouteID.ADMIN,
                path: appRoutes.ADMIN,
                element: <Admin />,
                loader: async () => {
                    console.count('admin load');

                    return await dataAPI().getAll();
                },
                action: editorFormAction,
                children: [
                    {
                        path: ':id',
                        element: null,
                        action: editorFormAction,
                    },
                ],
            },
        ],
    },
]);

export { appRouter };
