import { loginFromEvent } from '@/app/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { RootState } from '@/app/storeTypes';
import { auth } from '@/firebase/firebaseConfig';
import { appRoutes } from '@/router/appRouterConfig';
import { onAuthStateChanged, Unsubscribe } from 'firebase/auth';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

/**
 *
 */
function Protected({ children }: PropsWithChildren): JSX.Element | null {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.auth.user);
    const [userPending, setUserPending] = useState<boolean>(true);

    /**
     *
     */
    useEffect(() => {
        let unsub: Unsubscribe;
        if (!user) {
            unsub = onAuthStateChanged(auth, () => {
                setUserPending(false);
                if (auth.currentUser) dispatch(loginFromEvent());
            });
        }

        return () => {
            unsub && unsub();
        };
    }, [user]);

    switch (true) {
        case !user && !userPending:
            return <Navigate to={appRoutes.LOGIN} replace />;
        case user !== null:
            return children as JSX.Element;
        default:
            return null;
    }
}

export default Protected;
