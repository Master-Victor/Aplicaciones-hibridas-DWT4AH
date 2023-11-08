import { cafeSchemaCreate, cafeSchemaPatch } from '../schemas/producto.schema.js'

function validateProducto(req, res, next){
    cafeSchemaCreate.validate(req.body,{ abortEarly: false })
        .then( (producto) => {
            req.body = producto
            next()
        } )
        .catch((error) => res.status(500).json(error))
}

function validateProductoPatch(req, res, next){
    cafeSchemaPatch.validate(req.body,{ abortEarly: false, stripUnknown: true })
        .then( (producto) => {
            req.body = producto
            next()
        } )
        .catch((error) => res.status(500).json(error))
}

export {
    validateProducto,
    validateProductoPatch
}