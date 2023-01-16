import { ErrorState } from '@/states/error/ErrorTypes';

const initialErrorState: ErrorState = { error: null };

function errorReducer(errorState: ErrorState, action: ErrorState): ErrorState {
    return { ...errorState, ...action };
}

export { errorReducer, initialErrorState };
