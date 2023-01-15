import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { useEffect, useReducer } from 'react';
import { errorStateReducer, initialErrorState } from '@/states/error/Error.reducer';
import { ErrorDispatchContext } from '@/states/error/Error.context';
import { ViewStateContext } from '@/states/view/View.context';
import { initialViewState, viewStateReducer } from '@/states/view/View.reducer';
import DataProvider from '@/data/Data.provider';
import List from '@/components/list/List.component';
import Editor from '@/components/editor/Editor.component';
import Header from '@/components/header/Header.component';

/**
 *
 */
function App(): JSX.Element {
    const firestoreInstance = getFirestore(useFirebaseApp());
    const [errorState, errorDispatch] = useReducer(errorStateReducer, initialErrorState);
    const [viewState, viewDispatch] = useReducer(viewStateReducer, initialViewState);

    useEffect(() => {
        if (errorState.error) {
            //TODO: Show error message to user
            console.log(errorState.error);
            errorDispatch({ error: null });
        }
        return () => errorDispatch({ error: null });
    }, [errorState.error]);

    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <ViewStateContext.Provider value={[viewState, viewDispatch]}>
                <ErrorDispatchContext.Provider value={errorDispatch}>
                    <DataProvider>
                        <main>
                            <Header />
                            <List />
                            {viewState.showEditor && <Editor />}
                        </main>
                    </DataProvider>
                </ErrorDispatchContext.Provider>
            </ViewStateContext.Provider>
        </FirestoreProvider>
    );
}

export default App;
