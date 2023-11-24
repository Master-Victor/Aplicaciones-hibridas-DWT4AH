import { Link } from "react-router-dom";
import "./productListItem.css";

const ProductListItem = ({ producto }) => {
  const { _id, name, price, description } = producto;

  return (
    <li className="product-list-item">
      <img
        className="product-list-item__image"
        src={`https://picsum.photos/200/200?random=${_id}`}
        alt=""
        loading="lazy"
      />
      <div className="product-list-item__details">
        <h3 className="product-list-item__name">
          {name} <span className="product-list-item__code">#{_id}</span>
        </h3>
        <p className="product-list-item__price"> price: {price}</p>
        <p className="className='product-list-item__name"> {description} </p>
        <div className="product-list-item__actions">
          <Link
            className="product-list-item__view"
            to={`/productos/${_id}`}
          >
            Ver producto
          </Link>
        </div>
      </div>
    </li>
  );
};
export default ProductListItem;
