import * as service from "../../services/productos.services.js";

const getProductos = (req, res) => {
  const filter = req.query;

  service.getProductos(filter).then((productos) => {
    res.status(200).json(productos);
  });
};
const getProductoById = (req, res) => {
  const id = req.params.id;
  service.getProductobyId(id).then((producto) => {
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json();
    }
  });
};

const agregarProducto = (req, res) => {
  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    tags: req.body.tags
  };

  service
    .createProducto(producto)
    .then((productoNuevo) => {
      res.status(201).json(productoNuevo);
    })
    .catch((error) => res.status(500).json());
};
//PUT -> REEMPLAZA
const remplazarProducto = (req, res) => {
  const id = req.params.id;

  const producto = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    tags: req.body.tags
  };

  service.remplazarProducto(id, producto).then((productoEditado) => {
    if (productoEditado) {
      res.status(200).json(productoEditado);
    } else {
      res.status(404).json();
    }
  });
};
//PATCH -> Actualiza
const actualizarProducto = (req, res) => {
  const id = req.params.id;

  const product = {};

  if (req.body.name) {
    product.name = req.body.name;
  }

  if (req.body.price) {
    product.price = req.body.price;
  }

  if (req.body.description) {
    product.description = req.body.description;
  }

  if( req.body.tags ){
    product.tags = req.body.tags
  }

  service.editProducto(id, product).then((productoEditado) => {
    if (productoEditado) {
      res.status(200).json(productoEditado);
    } else {
      res.status(404).json();
    }
  });
};
//DELETE -> Eliminar
const eliminarProducto = (req, res) => {
  const id = req.params.id;
  service
    .eliminarProducto(id)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => res.status(500).json());
};

export {
  getProductos,
  getProductoById,
  agregarProducto,
  actualizarProducto,
  remplazarProducto,
  eliminarProducto,
};
