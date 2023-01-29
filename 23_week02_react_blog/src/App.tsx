import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/gui/header/Header';

/**
 *
 */
function App(): JSX.Element | null {
    const { pathname } = useLocation();

    /**
     *
     */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="container-responsive">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
