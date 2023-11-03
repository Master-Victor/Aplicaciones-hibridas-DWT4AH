import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import ProductList from "./components/ProductList";
import ProductsListPage from "./pages/productos/ProductsListPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/productos/ProductDetailsPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "productos",
        element: < ProductsListPage />,
      },  
      {
        path: "productos/:id",
        element: < ProductDetailsPage />,
      }
    ]
  },
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
