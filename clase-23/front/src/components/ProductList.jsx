import ProductListItem from "./ProductListItem";
import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const ProductList = ({ list }) => {

  const [productos, setProductos] = useState(list);

  const filtrar = (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrado = list.filter((producto) => {
      return producto.name.toLowerCase().includes(texto);
    });
    setProductos(filtrado);
  }

  useEffect(()=>{
    setProductos(list)
}, [list])

  return (
    <>
      <form className="product-list__form">
        Filtro:{" "}
        <input
          id="filtro"
          className="product-list__filter"
          type="text"
          onChange={filtrar}
        />
      </form>
      <ul>
        {productos.map((producto) => (
          <ProductListItem key={producto._id} producto={producto} />
        ))}
      </ul>
    </>
  );
};
ProductList.propTypes = {
  productos: PropTypes.array.isRequired,
};
export default ProductList;
