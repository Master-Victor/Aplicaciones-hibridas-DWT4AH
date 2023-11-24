import { call } from "./http.service";

export function login({ userName, password }){
    return call({ uri: "cuenta/login", method: "POST", body: { userName, password } });
}

export function logout(){
    return call( {uri: "cuenta", method: "DELETE"} )
}

export function getPerfil(){
    return call( {uri: "perfil", method: "GET"} )
}