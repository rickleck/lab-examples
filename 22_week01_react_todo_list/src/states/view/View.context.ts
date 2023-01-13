import { createContext, Dispatch, useContext } from 'react';
import { initialViewState } from './View.reducer';
import { ViewState, ViewStateAction } from './View.types';

const ViewStateContext = createContext<[ViewState, Dispatch<ViewStateAction>]>([
    initialViewState,
    () => {},
]);

function useViewState() {
    return useContext(ViewStateContext);
}

export { ViewStateContext, useViewState };
