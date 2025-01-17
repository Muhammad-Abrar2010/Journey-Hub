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
import UpdateTouristsSpot from "./Pages/UpdateTouristsSpot.jsx";
import Mylist from "./Pages/Mylist.jsx";
import PrivatePage from "./Pages/Home/Private/PrivatePage.jsx";

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
        element: <PrivatePage><AddTouristsSpot></AddTouristsSpot></PrivatePage>,
      },
      {
        path: "TouristSpot/:id",
        element: (
          <PrivatePage>
            {" "}
            <TouristsSpotDetails></TouristsSpotDetails>
          </PrivatePage>
        ),
        loader: () => fetch("https://journey-hub-backend.vercel.app/TouristSpots"),
      },
      {
        path: "UpdateTouristsSpot/:id",
        element: (
          <PrivatePage>
            <UpdateTouristsSpot></UpdateTouristsSpot>
          </PrivatePage>
        ),
        loader: ({ params }) =>
          fetch(`https://journey-hub-backend.vercel.app/TouristSpots/${params.id}`),
      },
      {
        path: "/Mylist",
        element: (
          <PrivatePage>
            <Mylist></Mylist>
          </PrivatePage>
        ),
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
