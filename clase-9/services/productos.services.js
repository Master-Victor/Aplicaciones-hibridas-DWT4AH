import { readFile, writeFile } from "node:fs/promises";

async function getProductos() {
    return readFile("./data/productos.json")  //DB
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((err) => {
        return [];
      });
  }

  async function getProductobyId(id) {
    return getProductos()
      .then((productos) => {
      let producto = productos[id] ? productos[id] : false;
      // for (let i = 0; i < productos.length; i++) {
      //   if (productos[i].id == id) {
      //     producto = productos[i];
      //     break;
      //   }
      // }
      
      return producto;
    });
  }

  const createProducto = async (producto) => {
    const productos = await getProductos()

    const productoNuevo = {
        ...producto, // spread operator
        id: productos.length + 1
    }

    productos.push(productoNuevo)

    await writeFile('./data/productos.json', JSON.stringify(productos))

    return productoNuevo

  }

  export {
    getProductos,
    getProductobyId,
    createProducto
  }