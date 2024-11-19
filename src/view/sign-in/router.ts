import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const signInRoute: RouteObject = {
    path: 'sign-in',
    Component: lazy(() => import('./page')),
};

export default signInRoute;
