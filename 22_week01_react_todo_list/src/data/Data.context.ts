import { createContext } from 'react';
import { DataSubscription } from '@/data/Data.types';

const DataContext = createContext<DataSubscription>({ tasks: [] });

export { DataContext };
