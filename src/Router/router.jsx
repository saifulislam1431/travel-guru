import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import CoxBazar from '../Pages/CoxsBazar/CoxBazar';
import Sreemangol from '../Pages/Sreemangol/Sreemangol';
import Sundorban from '../Pages/Sundorban/Sundorban';

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
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/coxsbazar",
                element :<CoxBazar></CoxBazar>
            },
            {
                path:"/sreemangol",
                element :<Sreemangol></Sreemangol>
            },
            {
                path:"/sundorban",
                element :<Sundorban></Sundorban>
            }
        ]
    }
])
export default router;