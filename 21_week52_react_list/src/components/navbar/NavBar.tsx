import { useState } from 'react';
import Login from '../login/Login';
import './styles.scss';

function NavBar() {
    const [user, setUser] = useState<{ username: string } | null>(null);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    /**
     *
     */
    function login(username: string): void {
        setUser({ username });
    }

    /**
     *
     */
    function openLogin(): void {
        setShowLogin(true);
    }

    /**
     *
     */
    function closeLogin(): void {
        setShowLogin(false);
    }

    return (
        <>
            <nav className="container-responsive nav-bar">
                <div className="header">Record Collection</div>
                {user ? (
                    user.username
                ) : (
                    <button className="btn-outline-black" onClick={openLogin}>
                        Login
                    </button>
                )}
            </nav>
            {showLogin && <Login login={login} close={closeLogin} />}
        </>
    );
}

export default NavBar;
