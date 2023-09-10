import express from "express";
import * as controllers from '../controllers/productos.controllers.js'

const route = express.Router()

route.get("/productos", controllers.getProductos);

route.get("/productos/nuevo", controllers.createProductFormPage);
route.post("/productos/nuevo", controllers.createProduct);

route.get("/productos/:producto_id", controllers.getProductobyId);


export default route
