import { createContext, Dispatch, useContext } from 'react';
import { ErrorState } from '@/states/error/ErrorTypes';

const ErrorDispatchContext = createContext<Dispatch<ErrorState>>(() => {});

function useErrorDispatch() {
    return useContext(ErrorDispatchContext);
}

export { ErrorDispatchContext, useErrorDispatch };
