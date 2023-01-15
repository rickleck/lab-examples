import { createContext, Dispatch, useContext } from 'react';
import { ErrorState } from '@/states/error/Error.types';

const ErrorDispatchContext = createContext<Dispatch<ErrorState>>(() => {});

function useErrorDispatch() {
    return useContext(ErrorDispatchContext);
}

export { ErrorDispatchContext, useErrorDispatch };
