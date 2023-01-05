import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import List from './components/list/List';

function App() {
    const firestoreInstance = getFirestore(useFirebaseApp());

    return (
        <FirestoreProvider sdk={firestoreInstance}>
            <div className="App">
                <List />
            </div>
        </FirestoreProvider>
    );
}

export default App;
