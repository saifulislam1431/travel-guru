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
import FindRooms from '../Pages/FindRooms/FindRooms';
import AllRooms from '../Pages/AllRooms/AllRooms';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/coxsbazar",
                element: <CoxBazar></CoxBazar>
            },
            {
                path: "/sreemangol",
                element: <Sreemangol></Sreemangol>
            },
            {
                path: "/sundorban",
                element: <Sundorban></Sundorban>
            },
            {
                path: "/allRooms",
                element: <AllRooms></AllRooms>,
                loader: ()=> fetch("https://travel-guru-server-sigma-plum.vercel.app/rooms")
            },
            {
                path: "/findRooms/:place",
                element: <FindRooms></FindRooms>,
                loader: ({ params }) => fetch(`https://travel-guru-server-sigma-plum.vercel.app/room-by-place/${params.place}`)
            }
        ]
    }
])
export default router;