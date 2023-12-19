import React from 'react';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AppLayout from 'pages/AppLayout';

import * as PATHS from './paths';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        /* AuthGuard goes here */
        element: <Outlet />,
        children: [
          {
            path: PATHS.HOME_PAGE,
            element: <HomePage />,
          },
        ],
      },
      {
        path: '*',
        element: <div>404</div>,
      },
      /* TODO: Add 500 page? */
    ],
  },
] as RouteObject[]);
