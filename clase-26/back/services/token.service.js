import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net")
const db = client.db("AH20232CP1")

const tokenCollection = db.collection("tokens")

async function crearToken(cuenta){
    const token = jwt.sign(cuenta,"Clave Secreta")

    await client.connect()
    console.log(cuenta)
    await tokenCollection.insertOne({token, cuenta_id: cuenta._id})

    return token
}

async function validarToken(token){
    try {
        const payload = jwt.verify(token, "Clave Secreta")
        console.log("payload",payload)
        await client.connect()
        const sessionActiva = await tokenCollection.findOne({token, cuenta_id: new ObjectId(payload._id)})
        console.log("sessionActiva",sessionActiva)
        if(!sessionActiva) return null
        return payload
    } catch (error) {
        return null
    }
}
async function removeToken(token){
    await client.connect()
    await tokenCollection.deleteOne({token})
}
export {
    crearToken,
    validarToken,
    removeToken
}