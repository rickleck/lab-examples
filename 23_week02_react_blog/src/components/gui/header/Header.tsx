import './Header.scss';
import { appRoutes } from '@/router/appRouterConfig';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { logout } from '@/app/features/auth/authThunks';

/**
 *
 */
function Header(): JSX.Element {
    const { pathname } = useLocation();
    const { items, status } = useAppSelector((state) => state.records);
    const dispatch = useAppDispatch();

    /**
     *
     */
    function handleLogout(): void {
        dispatch(logout());
    }

    return (
        <header className="header font-bold">
            <div className="top-bar">
                <Link to={appRoutes.ROOT} className="title hover-anim-horz">
                    Record Collection Updates
                </Link>
                <Link to={appRoutes.ADMIN} className="btn-admin hover-anim-horz-from-right">
                    Admin
                </Link>
            </div>

            <div className="bottom-bar">
                {items.length > 0 ? (
                    pathname === appRoutes.RECORD_LIST ? (
                        <div>{`Latest ${items.length} records added.`}</div>
                    ) : (
                        <Link className="btn-home hover-anim-horz" to={appRoutes.ROOT}>
                            <span className="material-symbols-outlined icon">arrow_back</span>Home
                        </Link>
                    )
                ) : (
                    status === 'loading' && <div className="loading"></div>
                )}

                {pathname.includes(appRoutes.ADMIN) && (
                    <button
                        onClick={handleLogout}
                        className="btn hover-anim-horz-from-right btn-logout"
                    >
                        Log out
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
