import { PropsWithChildren, useContext } from 'react';
import { DataContext } from '@/data/DataContext';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection, orderBy, query } from 'firebase/firestore';
import { DataSubscription, Task } from '@/data/DataTypes';
import { ViewContext } from '@/states/view/ViewContext';
import { getListByName, getListNames } from '@/data/utils/dataUtils';

function DataProvider({ children }: PropsWithChildren): JSX.Element {
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');
    const collectionQuery = query(collectionRef, orderBy('order'), orderBy('modifiedAt'));

    // Current list to be rendered
    const [{ currentListName }] = useContext(ViewContext);

    // Updates automatically when the Firestore db is updated
    const { error, status, data } = useFirestoreCollectionData(collectionQuery, { idField: 'id' });

    // Prepare all list names in an array
    const listNames = getListNames(data as Task[]).sort();

    // Get all tasks belonging to current list
    const currentTaskList = getListByName(currentListName, data as Task[]);

    return (
        <DataContext.Provider
            value={
                {
                    error,
                    status,
                    currentTaskList,
                    allTasks: data as Task[],
                    listNames,
                } as Readonly<DataSubscription>
            }
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
