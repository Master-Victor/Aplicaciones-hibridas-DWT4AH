import * as services from '../../services/auth.services.js'

async function crearCuenta(req, res){
    return services.crearCuenta(req.body)
        .then( ()=> res.status(201).json({ message: "Cuenta creada correctamente" }) )
        .catch( (err) => res.status(400).json({ error: { message: err.message } }) )
}

async function login(req, res){
    return services.login(req.body)
        .then( (cuenta) => res.status(200).json({ message: "Cuenta encontrada con exito", cuenta }) )
        .catch( (err) => res.status(400).json({ error: { message: err.message } }) )
}


export {
    crearCuenta,
    login
}