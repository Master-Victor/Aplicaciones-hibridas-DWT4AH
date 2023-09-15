import { readFile, writeFile } from "node:fs/promises";

async function getProductos({ elminado: {} }) {
    return readFile("./data/productos.json")  //DB
      .then((data) => {
        if( filter.eliminado ){
          return JSON.parse(data)
        }else{
          return JSON.parse(data)
        }
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

  const editProducto = async(id, producto) => {
    const productos = await getProductos()
    console.log(productos)
    let productoEditado = null
    for( let i = 0; i < productos.length ; i++ ){
      if( productos[i].id == id){
        productos[i] = {
          ...producto,
          id: productos[i].id
        }
        productoEditado = productos[i]
        break
      }
    }
    if(productoEditado){
      await writeFile('./data/productos.json', JSON.stringify(productos))
    }
    return productoEditado
  }

const eliminarProducto = async(id) => {
  const productos = await getProductos()
  console.log(productos)
  let productoEliminado = null
  for( let i = 0; i < productos.length ; i++ ){
    if( productos[i].id == id){
      productos[i].eliminado = true 
      productoEliminado = productos[i]
      break
    }
  }
  if(productoEliminado){
    await writeFile('./data/productos.json', JSON.stringify(productos))
  }
  return productoEliminado
}

  export {
    getProductos,
    getProductobyId,
    createProducto,
    editProducto,
    eliminarProducto
  }