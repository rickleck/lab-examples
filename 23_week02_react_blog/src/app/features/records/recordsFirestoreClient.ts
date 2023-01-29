import { db } from '@/firebase/firebaseConfig';
import { RecordCreateData, RecordData, RecordUpdateData } from './recordsTypes';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    Timestamp,
    updateDoc,
} from 'firebase/firestore';
import { FireStoreClient } from '@/firebase/firesbaseTypes';
import { dataConverter } from '@/firebase/firebaseUtils';

/**
 *
 */
const COLLECTION_NAME = 'lab-23';
const collRef = collection(db, COLLECTION_NAME);
const docRefByID = (id: string) =>
    doc(db, COLLECTION_NAME, id).withConverter(dataConverter<RecordData>());

/**
 *
 */
function recordsFireStoreClient(): FireStoreClient<RecordData> {
    /**
     *
     */
    async function getAll(): Promise<RecordData[]> {
        const q = query(collRef, orderBy('addedDate', 'desc')).withConverter(
            dataConverter<RecordData>()
        );
        const querySnaps = await getDocs(q);
        const items: RecordData[] = [];
        querySnaps.forEach((docSnap) => {
            items.push({ ...docSnap.data(), id: docSnap.id });
        });
        return items;
    }

    /**
     *
     */
    async function getByID(id: string): Promise<RecordData | undefined> {
        const docSnap = await getDoc(docRefByID(id));
        return docSnap.exists() ? { ...docSnap.data(), id: docSnap.id } : undefined;
    }

    /**
     *
     */
    async function addItem(itemData: RecordCreateData): Promise<RecordData | undefined> {
        const docRef = await addDoc(collRef.withConverter(dataConverter<RecordData>()), {
            ...itemData,
            modifiedAt: Timestamp.now().valueOf(),
        } as RecordCreateData);
        return getByID(docRef.id);
    }

    /**
     *
     */
    async function deleteItem(id: string): Promise<string> {
        await deleteDoc(docRefByID(id));
        return id;
    }

    /**
     *
     */
    async function updateItem(
        id: string,
        itemData: RecordUpdateData
    ): Promise<RecordData | undefined> {
        await updateDoc(docRefByID(id), {
            ...itemData,
            modifiedAt: Timestamp.now().valueOf(),
        } as RecordUpdateData);
        return getByID(id);
    }

    return { getAll, getByID, addItem, deleteItem, updateItem };
}

export { recordsFireStoreClient };
