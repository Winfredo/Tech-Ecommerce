import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";
import Details from "../components/pages/Details";
import Loginpage from "../components/pages/Loginpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="h-[100vh] w-screen flex items-center justify-center text-[35px] text-white bg-gradient-to-r from-[#211C24] to-[#27212b] ">
        404 Page Not Found
      </div>
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
    element: <Loginpage />,
  },
]);
