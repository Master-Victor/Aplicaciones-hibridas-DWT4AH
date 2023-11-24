import { Router } from 'express'
import * as controllers from '../controllers/controller.api.productos.js'
import routeOpinion from './route.api.producto_opinion.js'
import { validateProducto, validateProductoPatch } from '../../middleware/producto.validate.middleware.js'
import { validateToken } from '../../middleware/token.validate.middleware.js'

const route = Router()

/*function todos(req, res, next) {
    console.log("tengo un rol valido" )
    next()
}
route.use('/productos'. todos)*/
//traer todos los productos
route.get('/productos',[validateToken],controllers.getProductos)
//traer un producto especifico
route.get('/productos/:id',[validateToken], controllers.getProductoById)

route.all('/productos/:id',[validateToken],function todos(req, res, next) {
    console.log("tengo un rol valido" )
    next()
})

//agregar un producto
route.post('/productos',[validateProducto], controllers.agregarProducto)
//remplazar un producto -> PUT -> 
route.put('/productos/:id', controllers.remplazarProducto)
//actualizar un producto -> PATCH ->
route.patch('/productos/:id',[validateProductoPatch], controllers.actualizarProducto)
//eliminar un producto
route.delete("/productos/:id", controllers.eliminarProducto)

route.use(routeOpinion)

export default route