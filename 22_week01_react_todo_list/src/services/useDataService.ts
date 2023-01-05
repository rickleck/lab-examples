import { useCallback } from 'react';
import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Task, TaskUpdate, TaskCreate, DataService } from '@/services/DataService.types';

function useDataService(): DataService {
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');

    const { error, status, data } = useFirestoreCollectionData(collectionRef, { idField: 'id' });
    const tasks = data && data.length > 0 ? (data as Task[]) : [];

    /**
     *
     */
    const addTask = useCallback(
        async (itemData: TaskCreate): Promise<void> => {
            await addDoc(collectionRef, itemData);
        },
        [collectionRef]
    );

    /**
     *
     */
    const updateTask = useCallback(
        async (id: string, itemData: TaskUpdate): Promise<void> => {
            const docRef = doc(collectionRef, id);
            await updateDoc(docRef, <{ [x: string]: any }>itemData);
        },
        [collectionRef]
    );

    /**
     *
     */
    const removeTask = useCallback(
        async (id: string): Promise<void> => {
            const docRef = doc(collectionRef, id);
            await deleteDoc(docRef);
        },
        [collectionRef]
    );

    return { tasks, status, error, addTask, updateTask, removeTask };
}

export { useDataService };
