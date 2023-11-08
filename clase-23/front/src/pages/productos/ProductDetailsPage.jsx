import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDetailsPage = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Iniciando componente");
    fetch(`http://localhost:2023/api/productos/${id}`, {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok || res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login", { replace: true });
        }
        return res.json();
      })
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
