import { Outlet } from 'react-router-dom';
import Header from '@/components/gui/header/Header';

function Root() {
    return (
        <div className="container-responsive">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
