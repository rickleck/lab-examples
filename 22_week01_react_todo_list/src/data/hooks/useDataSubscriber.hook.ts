import { collection, orderBy, query } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { DataSubscription, Task } from '@/data/Data.types';

/**
 *
 */
function useDataSubscriber(): DataSubscription {
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');
    const collectionQuery = query(
        collectionRef,
        orderBy('order', 'desc'),
        orderBy('modifiedAt', 'desc')
    );

    const { error, status, data } = useFirestoreCollectionData(collectionQuery, { idField: 'id' });
    const tasks = data && data.length > 0 ? (data as Task[]) : [];

    const listNames = <string[]>[];
    const tasksByListName = new Map<string, Task[]>();
    tasks.forEach((task: Task) => {
        if (!tasksByListName.has(task.list)) {
            tasksByListName.set(task.list, []);
            listNames.push(task.list);
        }
        tasksByListName.get(task.list)?.push(task);
    });
    listNames.sort();

    return { error, status, tasksByListName, listNames };
}

export { useDataSubscriber };
