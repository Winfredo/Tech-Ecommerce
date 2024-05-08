import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";
import Details from "../components/pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <button className="w-[280px] h-[100px] flex  justify-center items-center m-auto mt-[25rem]">
        404 Not Found
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
]);
