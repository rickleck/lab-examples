import { appRoutes } from '@/router/appRouterConfig';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

/**
 *
 */
type ErrorPageProps = {
    errorType: '404' | 'unexpected';
};

/**
 *
 */
function ErrorPage({ errorType }: ErrorPageProps): JSX.Element {
    /**
     *
     */
    function getMessage(): string {
        switch (errorType) {
            case '404':
                return '404 Page Not Found';
            case 'unexpected':
            default:
                return 'An unexpected error occurred';
        }
    }

    return (
        <>
            <div className="error-page">
                <div className="content">
                    <p className="message">{getMessage()}</p>
                    <Link to={appRoutes.ROOT}>Go to the home page</Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
