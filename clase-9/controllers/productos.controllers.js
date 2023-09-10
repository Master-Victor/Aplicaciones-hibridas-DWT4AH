import * as service from '../services/productos.services.js'
import * as view from '../views/productos.views.js'

const getProductos = (req, res) => {
    service.getProductos().then((productos) => {
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
    res.send(view.createForm())
}

const createProduct = (req, res) => {
    const producto = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    service.createProducto(producto)
        .then( productoNuevo => {
            res.send( view.createPage( "Producto Creado",`<p>Producto ${productoNuevo.name} creado con el id ${productoNuevo.id}</p>` ) )
        } )
        .catch( (error) => res.send(view.createPage('Error', `<p> ${error}</p>`) ) )
}

export{
    getProductos,
    getProductobyId,
    createProductFormPage,
    createProduct
}
