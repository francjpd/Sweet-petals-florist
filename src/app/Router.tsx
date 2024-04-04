import { createBrowserRouter } from 'react-router-dom';
import Root from '../shared/Root/Root';
import ErrorPage from '../shared/ErrorPage/ErrorPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [

        ],

    }
]);

export default Router