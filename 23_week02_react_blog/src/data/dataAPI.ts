import { db } from '@/firebase/firebaseConfig';
import { BlogPostData, BlogPostDataUpdate } from '@/types/BlogPostData';
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

const COLLECTION_NAME: string = 'blog';
const collRef = collection(db, COLLECTION_NAME);

interface DataAPI<T> {
    getAll: () => Promise<T[]>;
    getByID: (id: string) => Promise<T | undefined>;
    addItem: (itemData: Partial<T>) => Promise<string | undefined>;
    deleteItem: (id: string) => Promise<void>;
    updateItem: (id: string, itemData: Partial<T>) => Promise<string | undefined>;
}

/**
 *
 */
function dataAPI(): DataAPI<BlogPostData> {
    /**
     *
     */
    async function getAll(): Promise<BlogPostData[]> {
        const q = query(collRef, orderBy('published', 'desc'));
        const querySnapshot = await getDocs(q);
        const items: BlogPostData[] = [];
        querySnapshot.forEach((doc) => {
            const data = { ...doc.data(), id: doc.id } as BlogPostData;
            items.push(data);
        });
        return items;
    }

    /**
     *
     */
    async function getByID(id: string): Promise<BlogPostData | undefined> {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? (docSnap.data() as BlogPostData) : undefined;
    }

    /**
     *
     */
    async function addItem(itemData: BlogPostDataUpdate): Promise<string | undefined> {
        const docRef = await addDoc(collRef, { modified: serverTimestamp(), ...itemData });
        return docRef.id;
    }

    /**
     *
     */
    async function deleteItem(id: string): Promise<void> {
        const docRef = doc(db, COLLECTION_NAME, id);
        await deleteDoc(docRef);
    }

    /**
     *
     */
    async function updateItem(id: string, itemData: BlogPostDataUpdate): Promise<string> {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, itemData);
        return id;
    }

    return { getAll, getByID, addItem, deleteItem, updateItem };
}

export { dataAPI };
