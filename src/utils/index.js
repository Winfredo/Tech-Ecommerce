import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <button className="w-[280px] h-[100px] bg-red-300 flex  justify-center items-center m-auto mt-[25rem]">404 Not Found</button>,
    },
    {
        path: "/products",
        element: <Products />,
    }
]);