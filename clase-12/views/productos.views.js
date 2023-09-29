function createProductListPage(productos) {
  let html = "";
  html += "<ul>";
  for (let i = 0; i < productos.length; i++) {
    html +=
      "<li>" +
      `<a href="/productos/${productos[i].id - 1}">${productos[i].name} </a>` +
      `<a href="/productos/editar/${productos[i].id - 1}">Editar</a>` +
      `<a href="/productos/eliminar/${productos[i].id - 1}">Eliminar</a>`
      "</li>";
  }
  html += "</ul>";
  return createPage("productos", html);
}

import { createPage } from "../pages/utils.js";

function createPaginaDetalle(producto) {
  let html = "";
  if (producto) {
    html += `<p>Nombre: ${producto.name}</p>`;
    html += `<p>Precio: ${producto.price}</p>`;
    html += `<p>Descripcion: ${producto.description}</p>`;
    html = createPage(producto.name, html);
  } else {
    html = createPage("Error", "<p>No se encontro el producto</p>");
  }
  return html;
}

function createForm() {
  let html = "<h1>Crear Producto</h1>";
  html += '<form action="/productos/nuevo" method="POST">';
  html += '<input type="text" name="name" placeholder="Nombre">';
  html += '<input type="text" name="price" placeholder="Precio">';
  html += '<input type="text" name="description" placeholder="Descripción">';
  html += '<button type="submit">Crear</button>';
  html += "</form>";
  return createPage("Crear Producto", html);
}

function editForm(producto) {
  let html = "<h1>Editar Producto</h1>";
  html += `<form action="/productos/editar/${producto.id}" method="POST">`;
  html += `'<input type="text" name="name" placeholder="Nombre" value="${producto.name}" >'`;
  html += `'<input type="text" name="price" placeholder="Precio" value="${producto.price}" >'`;
  html += `'<input type="text" name="description" placeholder="Descripción" value="${producto.description}" >'`;
  html += '<button type="submit">Editar</button>';
  html += "</form>";

  return createPage("Editar Producto", html);
}

function eliminarForm(producto){
  let html = "<h1>Eliminar Producto</h1>";
  html += `<form action="/productos/eliminar/${producto.id}" method="POST">`;
  html += createPaginaDetalle(producto);
  html += '<button type="submit">Eliminar</button>';
  html += "</form>";
  return html
}

export {
  createPaginaDetalle,
  createProductListPage,
  createForm,
  createPage,
  editForm,
  eliminarForm
};
