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

interface BlogEntry {
    id: string;
    title: string;
    author: string;
    published: string;
    modified: FieldValue;
    body: string;
    img_src?: string;
}

interface BlogEntryUpdate {
    title?: string;
    author?: string;
    published?: string;
    body?: string;
    img_src?: string;
}

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
        } catch (error: any) {
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
            }
        } catch (error: any) {
            console.log(error);
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
        } catch (error: any) {
            console.log(error);
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
        } catch (error: any) {
            console.log(error);
        }
    }

    /**
     *
     */
    async function updateItem(id: string, entryData: BlogEntryUpdate): Promise<string | undefined> {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await updateDoc(docRef, entryData as any);
            return id;
        } catch (error: any) {
            console.log(error);
        }
    }

    return { items, getAll, getByID, addItem, deleteItem, updateItem };
});

export { useBlogDataStore, type BlogEntry, type BlogEntryUpdate };
