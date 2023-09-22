import * as service from "../../services/productos.services.js";

const getProductos = (req, res) => {
    service.getProductos({elminado: true})
    .then((productos) => {
        res.status(200).json(productos)
    })
}
const getProductoById = (req, res) => {
    const id = req.params.id
    service.getProductobyId(id)
        .then( producto => {
            if(producto){
                res.status(200).json(producto)
            }else{
                res.status(404).json()
            }
        } )
}

const agregarProducto = (req, res) => {

    const producto = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      };
    
      service
        .createProducto(producto)
        .then((productoNuevo) => {
            res.status(201).json(productoNuevo)
        })
        .catch((error) => res.status(500).json());    

}
//PUT -> REEMPLAZA
const remplazarProducto = (req, res) => {
    const id = req.params.id

    const producto = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };
  
    service.editProducto(id, producto)
      .then( (productoEditado) => {
            if(productoEditado){
            res.status(200).json(productoEditado)
        }else{
            res.status(404).json()
        }
      } )

}
//PATCH -> Actualiza
const actualizarProducto = (req, res) => {
  const id = req.params.producto_id

  const producto = {};

    if( req.body.name ){
        producto.name = req.body.name
    }
    
    if( req.body.price ){
        producto.price = req.body.price
    }

    if( req.body.description ){
        producto.description = req.body.description
    }


  service.editProducto(id, producto)
    .then( (productoEditado) => {
      console.log(productoEditado)
      if(productoEditado){
        res.send( view.createPage("Producto Modificado", `<h2>Producto #${productoEditado.id} Editado con exito</h2>`) )
      }else{
        res.send( view.createPage( "No se pudo editar", "<h1>No se pudo editar</h1>" ) )
      }
    } )
}
//DELETE -> Eliminar 
const eliminarProducto = () => {

}

export{
    getProductos,
    getProductoById,
    agregarProducto,
    actualizarProducto,
    remplazarProducto,
    eliminarProducto
}
