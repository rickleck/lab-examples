import { reactive } from 'vue';

interface IUserStore {
    user: IUser;
    displayLogin: boolean;
    isLoggedIn: boolean;
    logIn: (name: string, password: string) => void;
    logOut: () => void;
}

interface IUser {
    name: string;
    password: string;
}

const UserStore = reactive<IUserStore>({
    user: { name: '', password: '' },
    isLoggedIn: false,
    displayLogin: false,

    logIn(name: string, password: string): void {
        this.user = { name, password };
        this.isLoggedIn = true;
        this.displayLogin = false;
    },

    logOut(): void {
        this.isLoggedIn = false;
    },
});

export { type IUserStore, type IUser, UserStore };
