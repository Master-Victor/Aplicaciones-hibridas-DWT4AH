import { Link } from "react-router-dom";

const Layout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
