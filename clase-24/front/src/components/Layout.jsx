import { Link, useNavigate } from "react-router-dom";
import { getPerfil, logout } from "../services/auth.service";
import { useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext";
import NavBar from "./NavBar";

const Layout = ({ children, ...rest }) => {
  const [perfil, setPerfil] = useState({});
  const navigate = useNavigate();
  const onLogOut = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    getPerfil().then((perfil) => setPerfil(perfil));
  }, []);

  return (
    <SessionContext.Provider value={ { perfil, onLogOut} }>
      <div {...rest}>
        <NavBar onLogOut={onLogOut} perfil={perfil} />
        {children}
      </div>
    </SessionContext.Provider>
  );
};

export default Layout;
