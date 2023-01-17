import { Task } from '@/data/DataTypes';

type ViewState = {
    showEditor: boolean;
    editTask: Task | null | undefined;
    currentListName: string;
};

type ViewStateAction = {
    type: 'openEditor' | 'closeEditor' | 'changeList';
    payload?: {
        editTask?: Task | null;
        listName?: string;
        originator?: string;
    };
};

export { type ViewState, type ViewStateAction };
