import * as service from "../services/productos.services.js";
import * as view from "../views/productos.views.js";

const getProductos = (req, res) => {
  service.getProductos({elminado: true}).then((productos) => {
    res.send(view.createProductListPage(productos));
  });
};

const getProductobyId = (req, res) => {
  const idProducto = req.params.producto_id;
  service.getProductobyId(idProducto).then((producto) => {
    if (producto) {
      res.send(view.createPaginaDetalle(producto));
    } else {
      res.send(view.createPage("Error", "<p>No se encontro el producto</p>"));
    }
  });
};

const createProductFormPage = (req, res) => {
  res.send(view.createForm());
};

const createProduct = (req, res) => {
  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };

  service
    .createProducto(producto)
    .then((productoNuevo) => {
      res.send(
        view.createPage(
          "Producto Creado",
          `<p>Producto ${productoNuevo.name} creado con el id ${productoNuevo.id}</p>`
        )
      );
    })
    .catch((error) => res.send(view.createPage("Error", `<p> ${error}</p>`)));
};

const editProductoFrom = (req, res) => {
  const id = req.params.producto_id;
  service.getProductobyId(id).then((producto) => {
    if (producto) {
      res.send(view.editForm(producto));
    } else {
      res.send(
        view.createPage(
          "No se encontro producto",
          "<h1>No se encontro el producto solicitado</h1>"
        )
      );
    }
  });
};

const editProducto = (req, res) =>{
  const id = req.params.producto_id

  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };

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

const eliminarProductoFrom = (req, res) => {
  const id = req.params.producto_id

  service.getProductobyId(id).then((producto) => {
    if (producto) {
      res.send(view.eliminarForm(producto));
    } else {
      res.send(
        view.createPage(
          "No se encontro producto",
          "<h1>No se encontro el producto solicitado</h1>"
        )
      );
    }
  });
}
const eliminarProducto = (req, res) => {
  const id = req.params.producto_id
  service.eliminarProducto(id)
  .then( (productoEliminado) => {
    if(productoEliminado){
      res.send( view.createPage("Producto Eliminado", `<h2>Producto #${productoEliminado.id} Eliminado con exito</h2>`) )
    }else{
      res.send( view.createPage( "No se pudo eliminar", "<h1>No se pudo eliminar</h1>" ) )
    }
  } )
}

export { getProductos, getProductobyId, createProductFormPage, createProduct, editProductoFrom, editProducto, eliminarProductoFrom, eliminarProducto };
