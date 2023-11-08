import { Router } from 'express'
import * as controllers from '../controllers/controller.api.producto_opinion.js'

const route = Router()

route.get('/productos/:id/opiniones', controllers.getOpiniones)
route.post('/productos/:id/opiniones', controllers.agregarOpinion)


export default route