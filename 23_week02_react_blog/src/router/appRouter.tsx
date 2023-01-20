import { createBrowserRouter } from 'react-router-dom';
import { dataAPI } from '@/data/dataAPI';
import { RouteID } from '@/types/RouteID';
import Root from '@/components/layouts/Root';
import ErrorView from '@/components/views/ErrorView';
import StartView from '@/components/views/StartView';
import BlogPostView from '@/components/views/BlogPostView';
import AdminView from '@/components/views/AdminView';

const appRoutes = new Map<RouteID, { path: string }>();
appRoutes.set(RouteID.ROOT, { path: '/' });
appRoutes.set(RouteID.START, { path: '/' });
appRoutes.set(RouteID.POST, { path: '/post/' });
appRoutes.set(RouteID.ADMIN, { path: '/admin/' });

const appRouter = createBrowserRouter([
    {
        id: RouteID.ROOT,
        path: appRoutes.get(RouteID.ROOT)?.path,
        element: <Root />,
        errorElement: <ErrorView />,
        children: [
            {
                id: RouteID.START,
                index: true,
                element: <StartView />,
                loader: async () => {
                    console.count('start load');
                    return await dataAPI().getAll();
                },
            },
            {
                id: RouteID.POST,
                path: appRoutes.get(RouteID.POST)?.path + ':id',
                element: <BlogPostView />,
                loader: async ({ params }) => {
                    console.count('blog post load');
                    return await dataAPI().getByID(params.id!);
                },
            },
            {
                id: RouteID.ADMIN,
                path: appRoutes.get(RouteID.ADMIN)?.path,
                element: <AdminView />,
                loader: async () => {
                    console.count('admin load');
                    return await dataAPI().getAll();
                },
                children: [
                    {
                        path: '',
                        element: null,
                    },
                    {
                        path: ':id',
                        element: null,
                    },
                ],
            },
        ],
    },
]);

export { appRouter, appRoutes };
