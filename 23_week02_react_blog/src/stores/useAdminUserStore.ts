import { create } from 'zustand';
import {
    signInWithEmailAndPassword,
    signOut,
    type User,
    type UserCredential,
} from '@firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

interface UserStore {
    user: User | null | 'pending';
    login(email: string, password: string): Promise<UserCredential>;
    logout(): Promise<void>;
}

const useUserStore = create<UserStore>()((set) => ({
    user: auth.currentUser,
    login: async (email: string, password: string): Promise<UserCredential> => {
        return await signInWithEmailAndPassword(auth, email, password);
    },
    logout: async (): Promise<void> => {
        await signOut(auth);
    },
}));

export { useUserStore, type UserStore };
