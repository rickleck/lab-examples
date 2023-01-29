import { auth } from '@/firebase/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

/**
 *
 */
const login = createAsyncThunk(
    'user/login',
    async (
        {
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        thunkApi
    ): Promise<void> => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            thunkApi.rejectWithValue((error as any).error.message);
        }
    }
);

/**
 *
 */
const logout = createAsyncThunk('user/logout', async (_, thunkApi): Promise<void> => {
    try {
        await signOut(auth);
    } catch (error) {
        thunkApi.rejectWithValue((error as any).error.message);
    }
});

export { login, logout };
