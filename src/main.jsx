import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import { checkAuthLoader } from './util/auth'

import LogIn from './Components/LogIn/LogIn'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import LandingPage from './Components/LandingPage/LandingPage'
import TakeOrders from './Components/TakeOrders/TakeOrders.jsx'
import { logout } from './util/auth'
import BackOffice from './Components/AdminView/BackOffice'
import Orders from './Components/Chef/Orders'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LogIn />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/takeorders",
        element: <TakeOrders />,
        errorElement: <ErrorPage />,
        loader: checkAuthLoader,
    },
    {
        path: '/logout',
        action: logout,
    },
    {
        path: '/backoffice',
        element: <BackOffice />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/orders',
        element: <Orders />,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
