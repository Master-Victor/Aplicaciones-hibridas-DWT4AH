import express from "express";
import ProductoRoute from '../routes/productos.routes.js'
import ApiProductoRoute from '../api/routes/route.api.productos.js'
const app = express(); //el servidor

app.use(express.urlencoded({ extended: true })); //midleware
app.use("/", express.static("public"));
app.use(express.json());                         //midleware

app.use(ProductoRoute)
app.use('/api',ApiProductoRoute)

app.listen(2023);
