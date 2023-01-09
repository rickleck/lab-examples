import { FieldValue, Timestamp } from 'firebase/firestore';

/**
 *
 */
type Task = {
    id: string;
    list: string;
    title: string;
    completed: boolean;
    order: number;
    modifiedAt: Timestamp | FieldValue;
};

type TaskUpdate = Partial<Pick<Task, 'title' | 'list' | 'completed'>>;

/**
 *
 */
type DataSubscription = {
    error?: Error | undefined;
    status?: 'loading' | 'error' | 'success';
    tasksByListName: Map<string, Task[]>;
    listNames: string[];
};

/**
 *
 */
interface DataSaver {
    addTask: (title: string, list: string, parentList?: Task[]) => Promise<void>;
    updateTask: (id: string, itemData: TaskUpdate) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
    updateListOrder: (list: Task[]) => Promise<void>;
}

export { type Task, type TaskUpdate, type DataSubscription, type DataSaver };
