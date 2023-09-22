import { Router } from 'express'
import * as controllers from '../controllers/controller.api.productos.js'

const route = Router()

//traer todos los productos
route.get('/productos', controllers.getProductos)

//traer un producto especifico
route.get('/productos/:id', controllers.getProductoById)
//agregar un producto
route.post('/productos', controllers.agregarProducto)
//remplazar un producto -> PUT -> 

//actualizar un producto -> PATCH ->

//eliminar un producto


export default route