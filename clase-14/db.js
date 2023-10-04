import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net') // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4
const db = client.db("AH20232CP1")

client.connect()
    .then( async() => {
        console.log("CONECTADO")
        const data = await db.collection("cafes").find().toArray()
        console.log(data)
    } )
    .catch( () => console.log("No me pude conectar") )