import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProducto } from "../../services/productos.service";
const ProductDetailsPage = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      getProducto(id)
      .then((data) => setProducto(data));
  }, []);
  
  return producto.name !== undefined ? (
    <div>
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <p>{producto.price}</p>
    </div>
  ) : (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
};

export default ProductDetailsPage;
