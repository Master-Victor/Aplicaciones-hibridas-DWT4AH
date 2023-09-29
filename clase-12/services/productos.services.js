import { readFile, writeFile } from "node:fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://alumnos:alumnos@dwt4ah.kxssn0r.mongodb.net"
); // mongodb://localhost:27017 -> 127.0.0.1 ipv6 ipv4
const db = client.db("AH20232CP1");

async function getProductos(filter = {}) {
  return db
    .collection("cafes")
    .find({ eliminado: { $ne: true } })
    .toArray();
}

async function getProductobyId(id) {
  return db.collection("cafes").findOne({ _id: ObjectId(id) });
}

const createProducto = async (producto) => {
  const productos = await getProductos();

  const productoNuevo = {
    ...producto, // spread operator
    id: productos.length + 1,
  };

  productos.push(productoNuevo);

  await writeFile("./data/productos.json", JSON.stringify(productos));

  return productoNuevo;
};

const editProducto = async (id, producto) => {
  const productos = await getProductos();
  console.log(productos);
  let productoEditado = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id == id) {
      productos[i] = {
        ...productos[i],
        ...producto,
        id: productos[i].id,
      };
      productoEditado = productos[i];
      break;
    }
  }
  if (productoEditado) {
    await writeFile("./data/productos.json", JSON.stringify(productos));
  }
  return productoEditado;
};

const eliminarProducto = async (id) => {
  const productos = await getProductos();
  console.log(productos);
  let productoEliminado = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id == id) {
      productos[i].eliminado = true;
      productoEliminado = productos[i];
      break;
    }
  }
  if (productoEliminado) {
    await writeFile("./data/productos.json", JSON.stringify(productos));
  }
  return productoEliminado;
};

export {
  getProductos,
  getProductobyId,
  createProducto,
  editProducto,
  eliminarProducto,
};
