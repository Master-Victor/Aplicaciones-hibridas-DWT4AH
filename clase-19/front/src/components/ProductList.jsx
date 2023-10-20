import ProductListItem from "./ProductListItem";
import React from "react";
const ProductList = () => {

    const [ count, setCount ] = React.useState()

    const productos = [
        {id: 1,nombre:"cafe con leche",precio:500, descripcion:"texto"},
        {id: 2,nombre:"cafe descremado",precio:1000, descripcion:"texto"},
        {id: 3,nombre:"cafe con crema",precio:1500, descripcion:"texto"},
        {id: 4,nombre:"cafe capuchino",precio:2000, descripcion:"texto"},
        {id: 5,nombre:"cafe mocha",precio:2500, descripcion:"texto"},
    ]
  return (
    <ul>
        {
            productos.map( producto => <ProductListItem key={producto.id} producto={producto} /> )
        }
    </ul>
  );
};

export default ProductList
