import * as services from "../../services/auth.services.js";
import * as tokenService from "../../services/token.service.js";

async function crearCuenta(req, res) {
  return services
    .crearCuenta(req.body)
    .then(() =>
      res.status(201).json({ message: "Cuenta creada correctamente" })
    )
    .catch((err) => res.status(400).json({ error: { message: err.message } }));
}

async function login(req, res) {
  return services
    .login(req.body)
    .then(async (cuenta) => {
      return { token: await tokenService.crearToken(cuenta), cuenta };
    })
    .then((auth) => res.status(200).json(auth))
    .catch((err) => res.status(400).json({ error: { message: err.message } }));
}

async function logout(req, res) {
  const token = req.headers["auth-token"];
  return tokenService
    .removeToken(token)
    .then(() => {
      res.status(200).json({ message: "Sesion cerrada correctamente." });
    })
    .catch((err) => {
      res.status(400).json({ error: { message: err.message } });
    });
}

export { crearCuenta, login, logout };
