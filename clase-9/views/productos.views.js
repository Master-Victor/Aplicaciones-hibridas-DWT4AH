function createProductListPage(productos) {
  let html = "";
  html += "<ul>";
  for (let i = 0; i < productos.length; i++) {
    html +=
      "<li>" +
      `<a href="/productos/${productos[i].id - 1}">${productos[i].name} </a>` +
      "</li>";
  }
  html += "</ul>";
  return createPage("productos", html);
}

import { createPage } from "../pages/utils.js";

function createPaginaDetalle(producto) {
  let html = "";
  if (producto) {
    html += `<p>${producto.price}</p>`;
    html += `<p>${producto.description}</p>`;
    html = createPage(producto.name, html);
  } else {
    html = createPage("Error", "<p>No se encontro el producto</p>");
  }
  return html;
}

function createForm() {
    let html = '<h1>Crear Producto</h1>'
    html += '<form action="/productos/nuevo" method="POST">'
    html += '<input type="text" name="name" placeholder="Nombre">'
    html += '<input type="text" name="price" placeholder="Precio">'
    html += '<input type="text" name="description" placeholder="Descripción">'
    html += '<button type="submit">Crear</button>'
    html += '</form>'

    return createPage('Crear Producto', html)
}

export {
    createPaginaDetalle,
    createProductListPage,
    createForm,
    createPage
}
