import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate()
    const [ userName,setUserName ] = useState("")
    const [ pass,setPass ] = useState("")
    const [ error,setError ] = useState("")

    const onChangeUserName = (e) => {
        setUserName( e.target.value )
    }

    const onChangePass = (e) => {
        setPass( e.target.value )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("userName:", userName, "Pass:", pass)
        fetch("http://localhost:2023/api/cuenta/login", {
            headers:{
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ userName: userName, password: pass })
        })
        .then( async(response) => {
            console.log(response.ok)
            if( !response.ok ){
                throw await response.json()
            }

            return await response.json()
        } )
        .then( ({cuenta, token}) => {
            console.log(cuenta, token)
            localStorage.setItem("token", token)
            navigate("/",{ replace: true })
        } )
        .catch( err => setError(err.error.message) )
    }

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <h1>Iniciar sesion</h1>
        <label>Nombre de usuario</label>
        <input type="text" onChange={onChangeUserName} value={ userName }/>
        <label>Contraseña</label>
        <input type="password" onChange={onChangePass} value={pass}/>
        <p> {error} </p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;
