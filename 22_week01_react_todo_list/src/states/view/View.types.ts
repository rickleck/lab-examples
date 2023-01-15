import { Task } from '@/data/Data.types';

type ViewState = {
    showEditor: boolean;
    editTask: Task | null | undefined;
    currentListName: string;
};

type ViewStateAction = {
    type: 'openEditor' | 'closeEditor' | 'changeList';
    editTask?: Task | null;
    listName?: string;
    originator?: string;
};

export { type ViewState, type ViewStateAction };
