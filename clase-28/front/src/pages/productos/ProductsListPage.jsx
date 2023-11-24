import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useNavigate } from "react-router-dom";
import { fetchProductos } from "../../store/reducers/productosReducer";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export default function ProductsListPage() {
  const dispatch = useDispatch();
  const [ productos, setProductos ] = useState([]);
  //const navigate = useNavigate()
  const productosData = useSelector( state => state.productos.items)
  const loading = useSelector( state => state.productos.loading)
  const error = useSelector( state => state.productos.error)

  useEffect( () => {
    dispatch(fetchProductos())
  }, []);

  if ( loading ) return <CircularProgress />
  if ( error ) return <div> {error} </div>
  
  return(
    <div className="una clase">
      <ProductList list={productosData} />
    </div>
  )
}
