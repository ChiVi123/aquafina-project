import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '~layout';
import signInRoute from '~view/sign-in/router';
import signUpRoute from '~view/sign-up/router';

const browserRouter = createBrowserRouter([
    {
        Component: DefaultLayout,
        children: [signInRoute, signUpRoute],
    },
]);

export default browserRouter;
