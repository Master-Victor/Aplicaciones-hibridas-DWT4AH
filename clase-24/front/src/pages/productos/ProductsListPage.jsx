import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useNavigate } from "react-router-dom";
import { getProductos } from "../../services/productos.service";

export default function ProductsListPage() {

  const [ productos, setProductos ] = useState([]);
  //const navigate = useNavigate()
  useEffect( () => {
      getProductos()
      .then((productos) =>setProductos(productos));
  }, []);

  return productos !== undefined ? (
    <div className="una clase">
      <ProductList list={productos} />
    </div>
  ) : <div>Cargando</div>
}
