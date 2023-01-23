import { appRoutes } from '@/router/appRoutes';
import { Link } from 'react-router-dom';

function HomeButton() {
    return (
        <p className="font-bold">
            <Link to={appRoutes.ROOT}>Back</Link>
        </p>
    );
}

export default HomeButton;
