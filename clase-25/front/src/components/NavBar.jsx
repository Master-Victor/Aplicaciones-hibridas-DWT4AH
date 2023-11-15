import { Link } from "react-router-dom"
import LogOut from "./LogOut"
const NavBar = () => {

    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <LogOut />
        </ul>
      </nav>
    )
}

export default NavBar