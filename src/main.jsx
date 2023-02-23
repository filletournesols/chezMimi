import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './error-page'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import TakeOrders from './Components/TakeOrders/TakeOrders.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "takeorders",
        element: <TakeOrders />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
