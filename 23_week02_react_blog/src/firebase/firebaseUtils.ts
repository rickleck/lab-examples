import {
    DocumentData,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    WithFieldValue,
} from 'firebase/firestore';

/**
 *
 */
function dataConverter<T>(): FirestoreDataConverter<T> {
    return {
        toFirestore: (data: WithFieldValue<T>) => data as DocumentData,
        fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
    };
}

export { dataConverter };
