type LoadStatus = 'idle' | 'loading' | 'error';

type WithLoadingState = {
    status: LoadStatus;
    errorMsg?: string;
};

export { type LoadStatus, type WithLoadingState };
