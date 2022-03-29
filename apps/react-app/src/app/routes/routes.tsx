import React from 'react';
import {
    PathRouteProps
} from 'react-router';
import RouteFallback from '../components/RouteFallback';
import { ROUTE_PATH } from '../constants/routes';
import PlaceholderDetailPage from '../pages/PlaceholderDetailPage';
import PlaceholderPage from '../pages/PlaceholderPage';


const ROUTES: PathRouteProps[] = [
    {
        path: ROUTE_PATH.ROOT,
        element: <PlaceholderPage />
    },
    {
        path: ROUTE_PATH.DETAIL,
        element: <PlaceholderDetailPage />
    },
    {
        path: '*',
        element: <RouteFallback path='/' />
    }
];

export default ROUTES;