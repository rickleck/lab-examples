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
import { DataSaver, Task, TaskUpdate } from '@/data/Data.types';

/**
 *
 */
function useDataSaver(): DataSaver {
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');
    const handlers = {
        addTask: useCallback(addTask, [collectionRef]),
        updateTask: useCallback(updateTask, [collectionRef]),
        removeTask: useCallback(removeTask, [collectionRef]),
        updateListOrder: useCallback(updateListOrder, []),
        removeList: useCallback(removeList, []),
    };

    /**
     *
     */
    async function addTask(
        title: string,
        list: string,
        parentIdList: string[] = []
    ): Promise<void> {
        const batch = getOrderBatch(parentIdList);
        const docRef = doc(collectionRef);
        const itemData: Omit<Task, 'id'> = {
            title,
            list,
            completed: false,
            order: parentIdList.length,
            modifiedAt: serverTimestamp() as FieldValue,
        };
        batch.set(docRef, itemData);
        await batch.commit();
    }

    /**
     *
     */
    async function updateTask(id: string, itemData: TaskUpdate): Promise<void> {
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
    async function removeList(idList: string[]): Promise<void> {
        const batch = writeBatch(firestore);
        idList.forEach((id: string) => {
            const docRef = doc(collectionRef, id);
            batch.delete(docRef);
        });
        await batch.commit();
    }

    /**
     *
     */
    async function updateListOrder(idList: string[]): Promise<void> {
        const batch = getOrderBatch(idList);
        await batch.commit();
    }

    /**
     *
     */
    function getOrderBatch(idList: string[]): WriteBatch {
        const batch = writeBatch(firestore);
        idList.forEach((id: string, index: number) => {
            const docRef = doc(collectionRef, id);
            batch.update(docRef, { order: index });
        });
        return batch;
    }

    return { ...handlers };
}

export { useDataSaver };
