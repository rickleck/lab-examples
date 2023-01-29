import { auth } from '@/firebase/firebaseConfig';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout } from './authThunks';
import { AuthState } from './authTypes';

/**
 *
 */
const initialState: AuthState = {
    user: auth.currentUser,
    status: 'idle',
};

/**
 *
 */
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginFromEvent(state: AuthState) {
            state.user = auth.currentUser;
        },
        resetStatus(state: AuthState) {
            state.status = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state: AuthState) => {
                state.user = auth.currentUser;
                state.status = 'idle';
            })
            .addCase(login.rejected, handleError)

            /**
             *
             */
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state: AuthState) => {
                state.user = null;
                state.status = 'idle';
            })
            .addCase(logout.rejected, handleError);
    },
});

/**
 *
 */
function handlePending(state: AuthState): void {
    state.status = 'loading';
}

/**
 *
 */
function handleError(state: AuthState, action: PayloadAction<unknown>): void {
    state.status = 'error';
    state.errorMsg = action.payload as string;
}

export default authSlice.reducer;
export const { loginFromEvent, resetStatus } = authSlice.actions;
