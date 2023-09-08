import express from "express";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { createPage } from "../pages/utils.js";

const app = express(); //el servidor

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

//json
async function getProductos() {
  return readFile("./data/productos.json")  //DB
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      return [];
    });
}

function createProductListPage(productos) {
  let html = "";
  html += "<ul>";
  for (let i = 0; i < productos.length; i++) {
    html +=
      "<li>" +
      `<a href="/productos/${productos[i].id}">${productos[i].name} </a>` +
      "</li>";
  }
  html += "</ul>";
  return createPage("productos", html);
}

async function getProductobyId(id) {
  return getProductos().then((productos) => {
    let producto = productos[id] ? productos[id] : false;
    // for (let i = 0; i < productos.length; i++) {
    //   if (productos[i].id == id) {
    //     producto = productos[i];
    //     break;
    //   }
    // }
    
    return producto;
  });
}
function createPaginaDetalle(producto){
  let html = "";
  if (producto) {
    html += `<p>${producto.price}</p>`;
    html += `<p>${producto.description}</p>`;
    html = (createPage(producto.name, html));
  } else {
    html = (createPage("Error", "<p>No se encontro el producto</p>"));
  }
  return html
}

app.get("/productos", (req, res) => {
  getProductos()
    .then((productos) => {
    res.send(createProductListPage(productos));
  });
});

//parametros
app.get("/productos/:producto_id", (req, res) => {
  const idProducto = req.params.producto_id;
  getProductobyId(idProducto)
    .then((producto) => {
      res.send(createPaginaDetalle(producto))
  });
});

app.listen(2023);
