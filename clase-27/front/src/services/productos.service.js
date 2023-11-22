import { call } from "./http.service";

export function getProductos() {
  return call({ uri: "productos" });
}

export function getProducto(id) {
  return call({ uri: `productos/${id}` });
}

export default {
  getProductos,
  getProducto
};
