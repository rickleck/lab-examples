import { WithLoadingState } from '@/utils/types/stateTypes';
import { User } from 'firebase/auth';

type AuthState = WithLoadingState & {
    user: User | null;
};

export { type AuthState };
