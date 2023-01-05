interface Task {
    id: string;
    list: string;
    title: string;
    completed: boolean;
}

interface TaskCreate {
    list: string;
    title: string;
    completed: boolean;
}

interface TaskUpdate {
    list?: string;
    title?: string;
    completed?: boolean;
}

interface DataService {
    error: Error | undefined;
    status: 'loading' | 'error' | 'success';
    tasks: Task[];
    addTask: (itemData: TaskCreate) => Promise<void>;
    updateTask: (id: string, itemData: TaskUpdate) => Promise<void>;
    removeTask: (id: string) => Promise<void>;
}

export { type Task, type TaskCreate, type TaskUpdate, type DataService };
