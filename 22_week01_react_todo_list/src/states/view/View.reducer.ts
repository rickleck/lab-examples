import { ViewState, ViewStateAction } from './View.types';

const initialViewState: ViewState = {
    showEditor: false,
    editTask: null,
    currentListName: '',
};

function viewStateReducer(viewState: ViewState, action: ViewStateAction): ViewState {
    switch (action.type) {
        case 'openEditor':
            return { ...viewState, showEditor: true, editTask: action.editTask };

        case 'closeEditor':
            return { ...viewState, showEditor: false, editTask: null };

        case 'changeList':
            return { ...viewState, currentListName: action.listName! };

        default:
            return viewState;
    }
}

export { viewStateReducer, initialViewState };
