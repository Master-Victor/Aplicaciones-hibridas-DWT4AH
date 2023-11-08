import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const onLogOut = () => {
    fetch("http://localhost:2023/api/cuenta", {
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((cuenta) => console.log(cuenta));
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

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
          <li onClick={onLogOut}>Salir</li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
