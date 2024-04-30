import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Root from "./Root/Root.jsx";
import TouristsSpot from "./Pages/TouristsSpot.jsx";
import Firebaseprovider from "./Firebase/Firebaseprovider.jsx";
import { Toaster } from "react-hot-toast";
import Login from "./Firebase/Auth/Login.jsx";
import Register from "./Firebase/Auth/Register.jsx";
import AddTouristsSpot from "./Pages/AddTouristsSpot.jsx";
import Error from "./Pages/Error.jsx";
import TouristsSpotDetails from "./Pages/TouristsSpotDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "TouristsSpot",
        element: <TouristsSpot></TouristsSpot>,
      },
      { path: "Login", element: <Login></Login> },
      {
        path: "Register",
        element: <Register></Register>,
      },
      {
        path: "AddTouristsSpot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "TouristSpot/:id",
        element: <TouristsSpotDetails></TouristsSpotDetails>,
        loader: () => fetch("http://localhost:5000/TouristSpots"),
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Firebaseprovider>
      {" "}
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <RouterProvider router={router} />
    </Firebaseprovider>{" "}
  </React.StrictMode>
);
