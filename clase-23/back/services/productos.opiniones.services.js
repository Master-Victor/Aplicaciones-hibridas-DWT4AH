import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net"); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4

const db = client.db("AH20232CP1");
const opiniones = db.collection("cafes_opinion")

function getOpiniones(id){
    return opiniones.findOne({ _id: new ObjectId(id) })
        .then( cafe => {
            return cafe?.opiniones || []
    })
}
async function agregarOpinion(id, opinion){
    const update = await opiniones.updateOne({ _id: new ObjectId(id) }, { $push: { opiniones: opinion } })
    if (update.matchedCount == 0) {
        await opiniones.insertOne({ _id: new ObjectId(id), opiniones: [opinion] })
    }
    return update
}

export{
    getOpiniones,
    agregarOpinion
}