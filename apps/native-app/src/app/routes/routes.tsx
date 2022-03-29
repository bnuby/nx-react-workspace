import React from 'react';
import {
    PathRouteProps
} from 'react-router';
import RouteFallback from '../components/RouteFallback';
import { ROUTE_PATH } from '../constants/routes';
import PlaceholderDetailScreen from '../screens/PlaceholderDetailScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';

const ROUTES: PathRouteProps[] = [
    {
        path: ROUTE_PATH.ROOT,
        element: <PlaceholderScreen />
    },
    {
        path: ROUTE_PATH.DETAIL,
        element: <PlaceholderDetailScreen />
    },
    {
        path: '*',
        element: <RouteFallback path='/' />
    }
];

export default ROUTES;