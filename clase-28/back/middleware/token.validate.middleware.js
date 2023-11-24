import * as tokenService from '../services/token.service.js'

async function validateToken(req, res, next) {
    const token = req.headers["auth-token"]
    if (!token) {
        return res.status(401).json({ error: { message: "No se envio el token" } })
    }

    const cuenta = await tokenService.validarToken(token)

    if (!cuenta) {
        return res.status(401).json({ error: { message: "Token invalido" } })
    }

    req.cuenta = cuenta

    next()
}

export {
    validateToken
}