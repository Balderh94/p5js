import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import About from "./routes/About";

const router = createHashRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
