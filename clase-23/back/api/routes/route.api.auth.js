import { Router } from "express"
import * as controllers from '../controllers/controller.api.auth.js'
import { validarCuenta } from '../../middleware/auth.validate.middleware.js'
const route = Router()
//Register
route.post('/cuenta', [validarCuenta],controllers.crearCuenta)
//Login
route.post('/cuenta/login', [validarCuenta],controllers.login)
//Salir
route.delete("cuenta", controllers.logout)
export default route
