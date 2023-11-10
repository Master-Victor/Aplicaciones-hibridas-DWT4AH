import { Link } from "react-router-dom"
import LogOut from "./LogOut"
const NavBar = ({ onLogOut,perfil }) => {

    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <LogOut onLogOut={onLogOut} perfil={perfil}/>
        </ul>
      </nav>
    )
}

export default NavBar