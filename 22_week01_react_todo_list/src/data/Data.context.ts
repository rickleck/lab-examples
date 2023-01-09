import { createContext } from 'react';
import { DataSubscription } from '@/data/Data.types';

/**
 *
 */
const init: DataSubscription = {
    tasksByListName: new Map(),
    listNames: [],
};

const DataContext = createContext<DataSubscription>(init);

export { DataContext };
