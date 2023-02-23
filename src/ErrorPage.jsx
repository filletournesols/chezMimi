import { useRouteError } from "react-router-dom";

import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error_page">
            <h1 className="oops">Oops!</h1>
            <p className="error_message">Lo sentimos, página no encontrada.</p>
            <p className="error">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage