import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import ErrorPage from "../components/ErrorPage";
import Dashboard from "../pages/Dashboard";


const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>

            },
            {
                path:"/coffees",
                element:<Coffee></Coffee>

            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default router