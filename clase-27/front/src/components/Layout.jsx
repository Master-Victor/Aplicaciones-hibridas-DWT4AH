import { SessionProvider } from "../context/SessionContext";
import NavBar from "./NavBar";

const Layout = ({ children, ...rest }) => {
  //1. ComponentDiDMount
  //2. Cuando se Actualiza con un hook
  //3. Cambia un children
  return (
    <SessionProvider>
      <div {...rest}>
        <NavBar/>
        {children}
      </div>
    </SessionProvider>)
};

export default Layout;
