import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function App() {

  return (
    <Layout className="">
      <Outlet />
    </Layout>
  );
}
