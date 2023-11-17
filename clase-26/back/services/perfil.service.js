import { MongoClient, ObjectId } from "mongodb";
import bcrypt from 'bcrypt'

const client = new MongoClient("mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net"); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4

const db = client.db("AH20232CP1");
const cuentaCollention = db.collection("perfil")

async function crearPerfil(cuenta, perfil){
    const perfilCompleto = {
        ...perfil,
        userName: cuenta.userName,
        _id: new ObjectId(cuenta._id)
    }
    await client.connect()
    const existe = await cuentaCollention.findOne( { userName: cuenta.userName } )
    if(existe){
        throw new Error("Ya existe un perfil")
    }

    await cuentaCollention.insertOne(perfilCompleto)
}

async function obtenerPerfil(id){
    await client.connect()
    const perfil = await cuentaCollention.findOne( { _id: new ObjectId(id) } )
    if(!perfil){
        throw new Error("No existe el perfil")
    }
    return perfil
}

export {
    crearPerfil,
    obtenerPerfil
}