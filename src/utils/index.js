import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";
import Details from "../components/pages/Details";
import Login from "../components/pages/login.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <button className="w-[280px] h-[100px] text-xl flex justify-center items-center m-auto mt-[25rem] animate-bounce">
        404 Page Not Found
      </button>
    ),
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);
