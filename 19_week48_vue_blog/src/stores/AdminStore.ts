import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    type User,
    type UserCredential,
} from '@firebase/auth';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from '../firebase/config';

const useAdminStore = defineStore('admin', () => {
    const user = ref<User | null>(auth.currentUser);
    const errorMsg = ref<string | null>(null);
    const isLoggedIn = computed<boolean>(() => user.value != null);

    onAuthStateChanged(auth, (u: User | null) => {
        user.value = u;
    });

    /**
     *
     */
    async function login(email: string, password: string): Promise<UserCredential | void> {
        errorMsg.value = null;
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            errorMsg.value = 'Incorrect email or password';
        }
    }

    /**
     *
     */
    async function logout(): Promise<void> {
        errorMsg.value = null;
        try {
            return await signOut(auth);
        } catch (error: any) {
            errorMsg.value = 'Could not log out.';
        }
    }

    return { user, isLoggedIn, errorMsg, login, logout };
});

export { useAdminStore };
