import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Homelayout from "./Components/Layouts/Homelayout";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homelayout />,
  },
  {
    path:"/Racing-Plane",
    element: <Homelayout/>
  },
  {
    path:"/Fixed-Wing",
    element: <Homelayout/>
  },
  {
    path:"/VTOLL",
    element: <Homelayout/>
  },
  {
    path:"/Technology-Development",
    element: <Homelayout/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
