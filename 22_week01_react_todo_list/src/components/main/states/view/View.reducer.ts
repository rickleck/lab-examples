import { ViewState, ViewStateAction } from './View.types';

const initialViewState: ViewState = { showEditor: false, editTask: null, currentList: '' };

function viewStateReducer(viewState: ViewState, action: ViewStateAction): ViewState {
    switch (action.type) {
        case 'openEditor':
            return { ...viewState, showEditor: true, editTask: action.editTask };
        case 'closeEditor':
            return { ...viewState, showEditor: false, editTask: null };
        case 'changeList':
            return { ...viewState, currentList: action.listName! };
        default:
            return viewState;
    }
}

export { viewStateReducer, initialViewState };
