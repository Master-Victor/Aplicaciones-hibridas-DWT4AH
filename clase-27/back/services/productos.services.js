import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net"); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4

const db = client.db("AH20232CP1");

async function getProductos(filter = {}) {

  const filterMongo = { eliminado: { $ne: true } }


  if( filter.min && filter.max ){
    filterMongo.price = {$gte: parseInt(filter.min), $lte: parseInt(filter.max)}
  }else{
    if (filter.min) {
      filterMongo.price = { $gte: parseInt(filter.min) };
    }
  
    if (filter.max) {
      filterMongo.price = { $lte: parseInt(filter.max) };
    }
  }

  if( filter.description ){
    filterMongo.$text = { $search: filter.description }
  }


  return db
    .collection("cafes")
    .find(filterMongo)
    .toArray();
}

async function getProductobyId(id) {
  return db.collection("cafes").findOne({ _id: new ObjectId(id) });
}

const createProducto = async (producto) => {
  const cafe = await db.collection("cafes").insertOne(producto);
  producto._id = cafe.insertedId;

  return producto;
};

const remplazarProducto = async (id, producto) => {
  const productoEditado = await db.collection("cafes").replaceOne({ _id: new ObjectId(id) }, producto);
  return productoEditado;
};
//patch
const editProducto = async (id, producto) => {
  const productoEditado = await db.collection("cafes").updateOne({ _id: new ObjectId(id) }, { $set: producto });
  return productoEditado;
}
const eliminarProducto = async (id) => {
  //await db.collection("cafes").updateOne({ _id: new ObjectId(id) }, { $set: { eliminado: true } }); //eliminacion logica
  const productoEliminado = await db.collection("cafes").deleteOne({ _id: new ObjectId(id) }); //fisica
  return productoEliminado;
};

export {
  getProductos,
  getProductobyId,
  createProducto,
  remplazarProducto,
  eliminarProducto,
  editProducto
};
