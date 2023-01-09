import List from '@/components/list/List.component';
import Editor from '@/components/editor/Editor.component';
import Header from '@/components/header/Header.component';
import { useEffect, useReducer } from 'react';
import { DataContext } from '@/data/Data.context';
import { useDataSubscriber } from '@/data/hooks/useDataSubscriber.hook';
import { errorStateReducer, initialErrorState } from './states/error/Error.reducer';
import { ErrorDispatchContext } from './states/error/Error.context';
import { ViewStateContext } from './states/view/View.context';
import { initialViewState, viewStateReducer } from './states/view/View.reducer';

/**
 *
 */
function Main(): JSX.Element {
    const subscription = useDataSubscriber();
    const [errorState, errorDispatch] = useReducer(errorStateReducer, initialErrorState);
    const [viewState, viewDispatch] = useReducer(viewStateReducer, initialViewState);

    useEffect(() => {
        subscription.status === 'success' &&
            viewState.currentList === '' &&
            viewDispatch({ type: 'changeList', listName: subscription.listNames[0] });
    }, [subscription.status]);

    useEffect(() => {
        if (errorState.error) {
            console.log(errorState.error);
            errorDispatch({ error: null });
        }
        return () => errorDispatch({ error: null });
    }, [errorState.error]);

    return (
        <main>
            <ViewStateContext.Provider value={[viewState, viewDispatch]}>
                <ErrorDispatchContext.Provider value={errorDispatch}>
                    <DataContext.Provider value={subscription}>
                        <Header />
                        <List />
                        {viewState.showEditor && <Editor />}
                    </DataContext.Provider>
                </ErrorDispatchContext.Provider>
            </ViewStateContext.Provider>
        </main>
    );
}

export default Main;
