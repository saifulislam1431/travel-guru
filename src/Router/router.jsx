import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])
export default router;