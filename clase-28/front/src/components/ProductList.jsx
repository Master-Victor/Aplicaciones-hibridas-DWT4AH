import ProductListItem from "./ProductListItem";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const ProductList = ({ list }) => {
  const [ texto, setTexto ] = useState('');
  //const [productos, setProductos] = useState(list);
  const listFilter = useMemo(() => list.filter((producto) => {
    return producto.name.toLowerCase().includes(texto);
  }), [list, texto]);

  const filtrar = useCallback((e) => {
    setTexto(e.target.value.toLowerCase());
  }, [setTexto])

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
        {listFilter.map((producto) => (
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
