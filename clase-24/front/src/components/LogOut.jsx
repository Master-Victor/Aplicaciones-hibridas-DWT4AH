import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'

const LogOut = () => {

    const { perfil, onLogOut} = useContext(SessionContext)

    return (
        <li onClick={onLogOut}>Salir {perfil.name} </li>
    )
}

export default LogOut