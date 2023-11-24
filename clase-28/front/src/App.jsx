import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
//import { Map } from 'inmutable'
export default function App() {
  //const styles = Map({ color: "red" })
  
  return (
    <Layout >
      <Outlet />
    </Layout>
  );
}
