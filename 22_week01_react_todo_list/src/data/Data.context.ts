import { createContext } from 'react';
import { DataSubscription } from '@/data/Data.types';

/**
 *
 */
const init: DataSubscription = {
    error: undefined,
    status: 'loading',
    allTasks: [],
    currentTaskList: [],
    listNames: [],
};

const DataContext = createContext<DataSubscription>(init);

export { DataContext };
