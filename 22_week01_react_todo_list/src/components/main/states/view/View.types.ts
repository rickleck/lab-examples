import { Task } from '@/data/Data.types';

type ViewState = {
    showEditor: boolean;
    editTask: Task | null | undefined;
    currentList: string;
};

type ViewStateAction = {
    type: 'openEditor' | 'closeEditor' | 'changeList';
    editTask?: Task | null;
    listName?: string;
};

export { type ViewState, type ViewStateAction };
