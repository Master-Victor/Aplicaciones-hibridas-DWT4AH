import "./productListItem.css";

const ProductListItem = ({ producto }) => {
  const { id, nombre, precio, descripcion } = producto;

  return (
    <li className="product-list-item">
      <img
        className="product-list-item__image"
        src={`https://picsum.photos/200/200?random=${id}`}
        alt=""
      />
      <div className="product-list-item__details">
        <h3 className="product-list-item__name">
          {nombre} <span className="product-list-item__code">#{id}</span>
        </h3>
        <p className="product-list-item__price"> Precio: {precio}</p>
        <p className="className='product-list-item__name"> {descripcion} </p>
      </div>
    </li>
  );
};
export default ProductListItem;
