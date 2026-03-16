import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Firms from "@/pages/Firms";
import FirmsDetail from "@/pages/FirmsDetail";
import Products from "@/pages/Products";
import Purchases from "@/pages/Purchases";
import Sales from "@/pages/Sales";
import PublicOnlyRoute from "./PublicOnlyRoute";
import SalesDetail from "@/pages/SalesDetail";
import Brands from "@/pages/Brands";
import Error from "@/pages/Error";
import AuthGuard from "./AuthGuard";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "stock",
    element: <AuthGuard />,
    errorElement: <Error />,
    children: [
      {
        element: <RootLayout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: "brands",
            element: <Brands />,
          },
          {
            path: "firms",
            element: <Firms />,
          },
          {
            path: "firms/:id",
            element: <FirmsDetail />,
          },
          {
            path: "products",
            element: <Products/>
          },
          {
            path: "purchases",
            element: <Purchases/>
          },
          {
            path: "purchases/:id",
            element: <div>under constructıon</div>
          },
          {
            path: "sales",
            element: <Sales/>
          },
          {
            path: "sales/:id",
            element: <SalesDetail/>
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}