import { createContext, Dispatch, useContext } from 'react';
import { initialViewState } from '@/states/view/View.reducer';
import { ViewState, ViewStateAction } from '@/states/view/View.types';

const ViewStateContext = createContext<[ViewState, Dispatch<ViewStateAction>]>([
    initialViewState,
    () => {},
]);

function useViewState() {
    return useContext(ViewStateContext);
}

export { ViewStateContext, useViewState };
