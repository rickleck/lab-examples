import { PropsWithChildren, useContext } from 'react';
import { DataContext } from '@/data/Data.context';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { collection, orderBy, query } from 'firebase/firestore';
import { DataSubscription, Task } from './Data.types';
import { ViewStateContext } from '@/states/view/View.context';
import { useDataUtils } from './hooks/useDataUtils.hook';

function DataProvider({ children }: PropsWithChildren): JSX.Element {
    const dataUtils = useDataUtils();
    const firestore = useFirestore();
    const collectionRef = collection(firestore, 'tasklist');
    const collectionQuery = query(collectionRef, orderBy('order'), orderBy('modifiedAt'));

    // Current list to be rendered
    const [{ currentListName }] = useContext(ViewStateContext);

    // Updates automatically when the Firestore db is updated
    const { error, status, data } = useFirestoreCollectionData(collectionQuery, { idField: 'id' });

    // Prepare all list names in an array for the selects
    const listNames = dataUtils.getListNames(data as Task[]).sort();

    // Get all tasks belonging to current list
    const currentTaskList = dataUtils.getListByName(currentListName, data as Task[]);

    return (
        <DataContext.Provider
            value={
                {
                    error,
                    status,
                    currentTaskList,
                    allTasks: data as Task[],
                    listNames,
                } as DataSubscription
            }
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
