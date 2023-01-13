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
    error: Error | undefined;
    status: 'error' | 'loading' | 'success';
    currentTaskList: Task[];
    allTasks: Task[];
    listNames: string[];
};
/**
 *
 */
interface DataUtils {
    getListByName(listName: string, tasks: Task[]): Task[];
    getListNames(tasks: Task[]): string[];
    getTaskFromId(id: string, tasks: Task[]): Task;
    getTaskIdList(tasks: Task[]): string[];
}

/**
 *
 */
interface DataSaver {
    addTask: (title: string, list: string, parentIdList?: string[]) => Promise<void>;
    updateTask: (id: string, itemData: TaskUpdate) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
    removeList(idList: string[]): Promise<void>;
    updateListOrder: (list: string[]) => Promise<void>;
}

export { type Task, type TaskUpdate, type DataSubscription, type DataUtils, type DataSaver };
