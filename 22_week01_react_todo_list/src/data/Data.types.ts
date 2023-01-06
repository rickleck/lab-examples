import { FieldValue, Timestamp } from 'firebase/firestore';

type Task = {
    id: string;
    list: string;
    title: string;
    completed: boolean;
    order: number;
    modifiedAt: Timestamp | FieldValue;
};

type DataSubscription = {
    error?: Error | undefined;
    status?: 'loading' | 'error' | 'success';
    tasks: Task[];
};

export { type Task, type DataSubscription };
