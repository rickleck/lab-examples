import { createContext, Dispatch, useContext } from 'react';
import { ErrorState } from './Error.types';

const ErrorDispatchContext = createContext<Dispatch<ErrorState>>(() => {});

function useErrorDispatch() {
    return useContext(ErrorDispatchContext);
}

export { ErrorDispatchContext, useErrorDispatch };
