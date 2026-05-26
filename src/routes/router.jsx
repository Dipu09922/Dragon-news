import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

import Home from "../pages/Home";
import Categorynews from "../pages/Categorynews";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:
            [
               { 
                path:"",
                element:<Home></Home>,
               },
               { 
                path:"/category/:id",
                element:<Categorynews></Categorynews>,
                loader : () => fetch("/news.json"),
               },
            ]
        },
        {
            path:"/auth",
            element: <AuthLayout></AuthLayout> ,
            children:
            [
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Registration></Registration>
                }
            ]
        },
        {
            path:"/news",
            element:<h2>news layout</h2>
        },
        {
            path:"/*",
            element:<h2>Error404</h2>
        },
    ]
);
export default router;