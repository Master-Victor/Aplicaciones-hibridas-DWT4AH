import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useNavigate } from "react-router-dom";
export default function ProductsListPage() {

  const [ productos, setProductos ] = useState([]);
  const navigate = useNavigate()
  useEffect( () => {
    console.log("Iniciando componente");
    fetch("http://localhost:2023/api/productos",{
      headers: {
        'auth-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
    },
    })
      .then((res) =>{
        if( !res.ok || res.status === 401 ){
          localStorage.removeItem("token")
          navigate("/login", {replace: true})
        } 
        return res.json()
      })
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
