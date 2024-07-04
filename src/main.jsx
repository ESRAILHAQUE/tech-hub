import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Rotues/Routes.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
