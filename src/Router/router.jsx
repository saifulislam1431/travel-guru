import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])
export default router;