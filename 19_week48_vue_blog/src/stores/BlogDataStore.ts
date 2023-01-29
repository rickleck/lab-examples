import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    FieldValue,
    getDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from '@firebase/firestore';
import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';
import { db } from '../firebase/config';

interface BlogDataStore {
    items: Ref<BlogEntry[]>;
    getAll: () => Promise<BlogEntry[]>;
    getByID: (id: string) => Promise<BlogEntry | undefined>;
    addItem: (entryData: BlogEntryUpdate) => Promise<string | undefined>;
    deleteItem: (id: string) => Promise<void>;
    updateItem: (id: string, entryData: BlogEntryUpdate) => Promise<string | undefined>;
}

type BlogEntry = {
    id: string;
    title: string;
    author: string;
    published: string;
    modified: FieldValue;
    body: string;
    img_src?: string;
};

type BlogEntryUpdate = Partial<Omit<BlogEntry, 'id' | 'modified'>>;

const COLLECTION_NAME: string = 'blog';

const useBlogDataStore = defineStore('blogdata', (): BlogDataStore => {
    const items = ref<BlogEntry[]>([]);
    const colRef = collection(db, COLLECTION_NAME);

    /**
     *
     */
    async function getAll(): Promise<BlogEntry[]> {
        try {
            const q = query(colRef, orderBy('published', 'desc'));
            items.value = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = <BlogEntry>doc.data();
                data.id = doc.id;
                items.value.push(data);
            });
        } catch (error: unknown) {
            console.log(error);
        }
        return items.value;
    }

    /**
     *
     */
    async function getByID(id: string): Promise<BlogEntry | undefined> {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return docSnap.data() as BlogEntry;
            } else {
                console.log('No entry found');
                return undefined;
            }
        } catch (error: unknown) {
            console.log(error);
            return undefined;
        }
    }

    /**
     *
     */
    async function addItem(entryData: BlogEntryUpdate): Promise<string | undefined> {
        try {
            const data = { modified: serverTimestamp(), ...entryData };
            const docRef = await addDoc(colRef, data);
            return docRef.id;
        } catch (error: unknown) {
            console.log(error);
            return undefined;
        }
    }

    /**
     *
     */
    async function deleteItem(id: string): Promise<void> {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await deleteDoc(docRef);
            return;
        } catch (error: unknown) {
            console.log(error);
        }
    }

    /**
     *
     */
    async function updateItem(id: string, entryData: BlogEntryUpdate): Promise<string | undefined> {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await updateDoc(docRef, entryData);
            return id;
        } catch (error: unknown) {
            console.log(error);
            return undefined;
        }
    }

    return { items, getAll, getByID, addItem, deleteItem, updateItem };
});

export { useBlogDataStore, type BlogEntry, type BlogEntryUpdate };
