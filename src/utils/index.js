import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,
    },
    {
        path: "/products",
        element: <Products />,
    }
]);