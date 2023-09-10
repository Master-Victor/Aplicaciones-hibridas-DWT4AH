import express from "express";
import ProductoRoute from '../routes/productos.routes.js'

const app = express(); //el servidor

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use(ProductoRoute)

app.listen(2023);
