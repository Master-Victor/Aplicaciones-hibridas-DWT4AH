import ReactDOM from "react-dom/client";
import App from "./App";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import ProductList from "./components/ProductList";
import ProductsListPage from "./pages/productos/ProductsListPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/productos/ProductDetailsPage";
import LoginPage from "./pages/login/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
const ProductListPagePreview = lazy(() => import ("./pages/productos/ProductsListPage")) 

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><App /></PrivateRoute>,
    errorElement: <Error404Page />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "productos",
        element: <Suspense fallback={<div>Cargando</div>}><ProductListPagePreview/></Suspense>,
      },  
      {
        path: "productos/:id",
        element: < ProductDetailsPage />,
      }
    ]
  },{
    path: "/login",
    element: <LoginPage/>
  }
  // {
  //   path: "/admin",
  //   element: <AppAdmin />,
  //   errorElement: <Error404Page />,
  //   children: [
  //     {
  //       path: "productos",
  //       element: < ProductsListPage />,
  //     },  
  //   ]
  // },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
