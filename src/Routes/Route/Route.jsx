import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/Home/About/About";
import Services from "../../Pages/Home/Sevices/Services";
import ServiceDetails from "../../Pages/Home/Sevices/ServiceDetails";
import CheckOut from "../../Pages/Home/CheckOut/CheckOut";
import Login from "../../Pages/Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Booking from "../../Pages/Home/Booking/Booking";
import { useContext } from "react";
const router = createBrowserRouter(
  [

    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path: "/",
         element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/servicesDetails/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'checkOut/:id',
          element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<Booking></Booking>,
         
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;