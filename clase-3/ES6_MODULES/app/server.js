// const http = require('http')
// const PRODUCTOS = require('./data/productos.js')
// const pages = require('./pages/utils.js')

import http from "http"
import PRODUCTOS from "./data/productos.js"
import { createPage, createProductList } from "./pages/utils.js"

// function costoAlfajor(costo, costo_fijo){
//     return costo*costo_fijo
// }

// function main(){
//     let costo = 10          //servidor
//     let costo_fijo = 100    //servidor
//     console.log(costoAlfajor(costo, costo_fijo))
// }

// function createPage(title, content){
//     let html = "";

//     html += `<!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">`
//     html += "<title>" + title + "</title></head><body>"
//     html += "<h1>" + title + "</h1>"
//     html += content
//     html += "</body></html>"

//     return html
// }

// function createProductList(productos){
//     let html = ""

//     html += "<ul>"
//     for( let i = 0 ; i < productos.length ; i++ ){
//         html += '<li>' + productos[i].name + '</li>'
//     }
//     html += "</ul>"

//     return html
// }
// necesitan B pero tambien necesitan A -> npm les va a traer A
const server = http.createServer( (req, res) => {

    if( req.url === "/" ){
        res.write(createPage("Home", "<p>Victor</p>"))
    } 
    if( req.url === "/profesor" ){
        res.write(createPage("Profesor", "<p>Victor Villafañe</p>"))
    } 
    if( req.url === "/materia" ){
        res.write(createPage("Materia", "<p>Aplicaciones Hibridas</p>"))
    } 
    if( req.url === "/productos" ){
        res.write(createPage("Productos", createProductList(PRODUCTOS)))
    }
    res.end()
} )

server.listen(2023)