import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";

export default function ProductsListPage() {

  const [ productos, setProductos ] = useState([]);

  useEffect( () => {
    console.log("Iniciando componente");
    fetch("https://api-aplicaciones-hibridas-84yxxtscs-master-victor.vercel.app/api/productos")
      .then((res) => res.json())
      .then((data) =>setProductos(data));
  }, []);

  useEffect(()=>{

  }, [productos])

  return (
    <div className="una clase">
      <ProductList list={productos} />
    </div>
  );
}
