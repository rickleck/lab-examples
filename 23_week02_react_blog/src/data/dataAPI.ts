import { db } from '@/firebase/firebaseConfig';
import { RecordCreateData, RecordData, RecordUpdateData } from '@/data/types/RecordData';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';

/**
 *
 */
interface DataAPI<T> {
    getAll: () => Promise<T[]>;
    getByID: (id: string) => Promise<T | undefined>;
    addItem: (itemData: Omit<T, 'id'>) => Promise<string | undefined>;
    deleteItem: (id: string) => Promise<void>;
    updateItem: (id: string, itemData: Partial<Omit<T, 'id'>>) => Promise<string | undefined>;
}

/**
 *
 */
const COLLECTION_NAME = 'lab-23';
const collRef = collection(db, COLLECTION_NAME);
const docRefByID = (id: string) => doc(db, COLLECTION_NAME, id);

/**
 *
 */
function dataAPI(): DataAPI<RecordData> {
    /**
     *
     */
    async function getAll(): Promise<RecordData[]> {
        const q = query(collRef, orderBy('addedDate', 'desc'));
        const querySnapshot = await getDocs(q);
        const items: RecordData[] = [];
        querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), id: doc.id } as RecordData;
            items.push(data);
        });
        return items;
    }

    /**
     *
     */
    async function getByID(id: string): Promise<RecordData | undefined> {
        const docSnap = await getDoc(docRefByID(id));
        return docSnap.exists() ? (docSnap.data() as RecordData) : undefined;
    }

    /**
     *
     */
    async function addItem(itemData: RecordCreateData): Promise<string | undefined> {
        const docRef = await addDoc(collRef, { modified: serverTimestamp(), ...itemData });
        return docRef.id;
    }

    /**
     *
     */
    async function deleteItem(id: string): Promise<void> {
        await deleteDoc(docRefByID(id));
    }

    /**
     *
     */
    async function updateItem(id: string, itemData: RecordUpdateData): Promise<string> {
        await updateDoc(docRefByID(id), itemData);
        return id;
    }

    return { getAll, getByID, addItem, deleteItem, updateItem };
}

export { dataAPI };
