import { useCallback } from 'react';
import {
    collection,
    doc,
    updateDoc,
    deleteDoc,
    writeBatch,
    WriteBatch,
    serverTimestamp,
    FieldValue,
} from 'firebase/firestore';
import { useFirestore } from 'reactfire';
import { Task } from '@/data/Data.types';

/**
 *
 */
interface DataSave {
    addTask: (
        parentList: Task[],
        title: string,
        list: string,
        completed?: boolean
    ) => Promise<void>;
    updateTask: (
        id: string,
        itemData: Partial<Pick<Task, 'title' | 'list' | 'completed'>>
    ) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
    updateListOrder: (list: Task[]) => Promise<void>;
}

/**
 *
 */
function useDataSave(): DataSave {
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');
    const handlers = {
        addTask: useCallback(addTask, [collectionRef]),
        updateTask: useCallback(updateTask, [collectionRef]),
        removeTask: useCallback(removeTask, [collectionRef]),
        updateListOrder: useCallback(updateListOrder, []),
    };

    /**
     *
     */
    async function addTask(
        parentList: Task[],
        title: string,
        list: string,
        completed: boolean = false
    ): Promise<void> {
        const batch = getOrderBatch(parentList);
        const docRef = doc(collectionRef);
        const itemData: Omit<Task, 'id'> = {
            title,
            list,
            completed,
            order: parentList.length,
            modifiedAt: serverTimestamp() as FieldValue,
        };
        batch.set(docRef, itemData);
        await batch.commit();
    }

    /**
     *
     */
    async function updateTask(
        id: string,
        itemData: Partial<Pick<Task, 'title' | 'list' | 'completed'>>
    ): Promise<void> {
        if (itemData.list) (itemData as Partial<Task>).order = 1000;
        const docRef = doc(collectionRef, id);
        await updateDoc(docRef, { ...itemData, modifiedAt: serverTimestamp() });
    }

    /**
     *
     */
    async function removeTask(id: string): Promise<void> {
        const docRef = doc(collectionRef, id);
        await deleteDoc(docRef);
    }

    /**
     *
     */
    async function updateListOrder(list: Task[]): Promise<void> {
        const batch = getOrderBatch(list);
        await batch.commit();
    }

    /**
     *
     */
    function getOrderBatch(list: Task[]): WriteBatch {
        const batch = writeBatch(firestore);
        list.reverse().forEach((task: Task, index: number) => {
            const docRef = doc(collectionRef, task.id);
            batch.update(docRef, { order: index });
        });
        return batch;
    }

    return { ...handlers };
}

export { useDataSave };
