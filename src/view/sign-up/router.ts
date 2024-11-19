import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const signUpRoute: RouteObject = {
    path: 'opt',
    Component: lazy(() => import('./page')),
};

export default signUpRoute;
