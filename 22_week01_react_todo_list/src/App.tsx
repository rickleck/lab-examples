import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Main from '@/components/main/Main.component';
import DataProvider from '@/data/Data.provider';

function App(): JSX.Element {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <DataProvider>
                <Main />
            </DataProvider>
        </FirestoreProvider>
    );
}

export default App;
