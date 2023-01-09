import { ErrorState } from './Error.types';

const initialErrorState: ErrorState = { error: null };

function errorStateReducer(errorState: ErrorState, action: ErrorState): ErrorState {
    return { ...errorState, ...action };
}

export { errorStateReducer, initialErrorState };
