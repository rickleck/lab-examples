import recordsReducer from '@/app/features/records/recordsSlice';
import authReducer from '@/app/features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        records: recordsReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                //Firebase auth specific
                ignoredPaths: ['auth.user'],
            },
        }),
});

export { store };
