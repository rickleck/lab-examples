import { createContext, Dispatch, useContext } from 'react';
import { initialViewState } from '@/states/view/ViewReducer';
import { ViewState, ViewStateAction } from '@/states/view/ViewTypes';

const ViewContext = createContext<[ViewState, Dispatch<ViewStateAction>]>([
    initialViewState,
    () => {},
]);

function useViewState() {
    return useContext(ViewContext);
}

export { ViewContext, useViewState };
