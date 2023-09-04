import express from 'express'
import path from 'node:path'

const app = express()   //el servidor
let contador = 0
app.use(express.urlencoded({extended: true}))
app.use('/', express.static('public'))

//GET envia datos por la URL -> QUERY
//www.google.com.ar?mensaje=datos&mensaje2?datos2
//POST envia los datos por el body de la respuesta o del formularios
app.get('/', (req, res) => {
  res.send("hola mundo")
})

app.get('/contact.html', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
} )

app.get( "/saludo", (req, res) => { //req -> Es un objeto donde estan los datos que nos envia el cliente
  const nombre = req.query.nombre
  res.send(`Hola! ${nombre}`)
} )


app.get( "/contador", (req, res) => { //req -> Es un objeto donde estan los datos que nos envia el cliente
  contador++
  res.send(`contador: ${contador}`)
} )

app.post( "/saludo", (req, res) => {
  const nombre = req.body.nombre
  res.send(`Hola! ${nombre}`)
})

app.listen(2023)