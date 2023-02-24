import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import { checkAuthLoader } from './util/auth'

import LogIn from './Components/LogIn'
import ErrorPage from './ErrorPage.jsx'
import Home from './Components/home';
import TakeOrders from './Components/TakeOrders/TakeOrders.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
