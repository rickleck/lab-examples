import { ViewState, ViewStateAction } from '@/states/view/ViewTypes';

const initialViewState: ViewState = {
    showEditor: false,
    editTask: null,
    currentListName: '',
};

function viewReducer(viewState: ViewState, action: ViewStateAction): ViewState {
    switch (action.type) {
        case 'openEditor':
            return { ...viewState, showEditor: true, editTask: action.payload?.editTask };

        case 'closeEditor':
            return { ...viewState, showEditor: false, editTask: null };

        case 'changeList':
            return { ...viewState, currentListName: action.payload?.listName! };

        default:
            return viewState;
    }
}

export { viewReducer, initialViewState };
