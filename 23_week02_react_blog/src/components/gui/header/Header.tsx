import './Header.scss';
import { appRoutes } from '@/router/appRoutes';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="w-100 header">
            <Link to={appRoutes.ROOT} className="header-title font-bold">
                Record Collection
            </Link>
            <Link to={appRoutes.ADMIN} className="font-bold">
                Admin
            </Link>
        </header>
    );
}

export default Header;
