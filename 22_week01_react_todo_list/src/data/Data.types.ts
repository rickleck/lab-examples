import { FieldValue, Timestamp } from 'firebase/firestore';

/**
 *
 */
type Task = {
    readonly id: string;
    readonly modifiedAt: Timestamp | FieldValue;
    list: string;
    title: string;
    completed: boolean;
    order: number;
};

type TaskUpdate = Partial<Pick<Task, 'title' | 'list' | 'completed'>>;

/**
 *
 */
type DataSubscription = {
    error: Error | undefined;
    status: 'error' | 'loading' | 'success';
    currentTaskList: Task[];
    allTasks: Task[];
    listNames: string[];
};

export { type Task, type TaskUpdate, type DataSubscription };
