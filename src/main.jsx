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

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/takeorders",
        element: <TakeOrders />,
        loader: checkAuthLoader,
    },
    {
        path: '/logout',
        action: logout,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
