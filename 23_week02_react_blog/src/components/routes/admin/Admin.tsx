import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { RootState } from '@/app/storeTypes';
import { useEffect } from 'react';
import { getAll } from '@/app/features/records/recordsThunks';
import { Navigate, useParams } from 'react-router-dom';
import { appRoutes } from '@/router/appRouterConfig';
import { RecordData } from '@/app/features/records/recordsTypes';
import { editorConfig } from '@/components/gui/editor/editorConfig';
import ErrorPage from '../error/ErrorPage';
import Editor from '@/components/gui/editor/Editor';

/**
 *
 */
function Admin(): JSX.Element {
    const dispatch = useAppDispatch();
    const params = useParams();
    const config = editorConfig();
    const id = params.id;
    const { items, status } = useAppSelector((state: RootState) => state.records);
    const activeItem = items.find((item: RecordData) => item.id === id);

    /**
     *
     */
    useEffect(() => {
        dispatch(getAll());
    }, []);

    /**
     *
     */
    function gettUI(): JSX.Element {
        switch (true) {
            //Default to first item in list
            case !id && items.length > 0:
                return <Navigate to={appRoutes.ADMIN + items[0].id} replace={true} />;

            //Go to 404 if item not found
            case id && id !== config.ADD_ITEM_ID && !activeItem:
                return <ErrorPage errorType="404" />;

            default:
                return <Editor items={items} activeItem={activeItem} />;
        }
    }

    return <>{status !== 'loading' && gettUI()}</>;
}

export default Admin;
