import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Account from "../Pages/Account/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      
    },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: '/account',
        element: <Account></Account>
      }
    ],
  },
]);
