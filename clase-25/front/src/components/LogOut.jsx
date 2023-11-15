import { useContext } from 'react'
import { SessionContext, useSession } from '../context/SessionContext'

const LogOut = () => {

    const { perfil, onLogOut} = useSession()

    return (
        <li onClick={onLogOut}>Salir {perfil.name} </li>
    )
}

export default LogOut