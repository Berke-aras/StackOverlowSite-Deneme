import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
