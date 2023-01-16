import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { useEffect, useReducer } from 'react';
import { errorReducer, initialErrorState } from '@/states/error/ErrorReducer';
import { ErrorDispatchContext } from '@/states/error/ErrorContext';
import { ViewContext } from '@/states/view/ViewContext';
import { initialViewState, viewReducer } from '@/states/view/ViewReducer';
import DataProvider from '@/data/DataProvider';
import List from '@/components/list/List';
import Editor from '@/components/editor/Editor';
import Header from '@/components/header/Header';

/**
 *
 */
function App(): JSX.Element {
    const firestoreInstance = getFirestore(useFirebaseApp());
    const [errorState, errorDispatch] = useReducer(errorReducer, initialErrorState);
    const [viewState, viewDispatch] = useReducer(viewReducer, initialViewState);

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
            <ViewContext.Provider value={[viewState, viewDispatch]}>
                <ErrorDispatchContext.Provider value={errorDispatch}>
                    <DataProvider>
                        <main>
                            <Header />
                            <List />
                            {viewState.showEditor && <Editor />}
                        </main>
                    </DataProvider>
                </ErrorDispatchContext.Provider>
            </ViewContext.Provider>
        </FirestoreProvider>
    );
}

export default App;
