import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import List from './components/list/List.component';
import DataProvider from './data/Data.provider';

function App(): JSX.Element {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <div className="App">
                <DataProvider>
                    <List />
                </DataProvider>
            </div>
        </FirestoreProvider>
    );
}

export default App;
