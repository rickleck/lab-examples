import { createContext } from 'react';
import { DataSubscription } from '@/data/DataTypes';

/**
 *
 */
const init: Readonly<DataSubscription> = {
    error: undefined,
    status: 'loading',
    allTasks: [],
    currentTaskList: [],
    listNames: [],
};

const DataContext = createContext<Readonly<DataSubscription>>(init);

export { DataContext };
