import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import Main from '@/components/main/Main.component';

/**
 *
 */
function App(): JSX.Element {
    const firestoreInstance = getFirestore(useFirebaseApp());
    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <Main />
        </FirestoreProvider>
    );
}

export default App;
