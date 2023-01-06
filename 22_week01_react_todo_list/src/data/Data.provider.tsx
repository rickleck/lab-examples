import { PropsWithChildren } from 'react';
import { DataContext } from '@/data/Data.context';
import { useDataSubscriber } from '@/data/hooks/useDataSubscriber.hook';
import { DataSubscription } from '@/data//Data.types';

function DataProvider({ children }: PropsWithChildren): JSX.Element {
    const subscription: DataSubscription = useDataSubscriber();

    return <DataContext.Provider value={subscription}>{children}</DataContext.Provider>;
}

export default DataProvider;
