import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export default function App() {

  const [ productos, setProductos ] = useState([]);

  useEffect( () => {
    console.log("Iniciando componente");
    fetch("http://localhost:2023/api/productos")
      .then((res) => res.json())
      .then((data) =>setProductos(data));
  }, []);

  useEffect(()=>{

  }, [productos])

  return (
    <Layout className="">
      <Outlet />
    </Layout>
  );
}
