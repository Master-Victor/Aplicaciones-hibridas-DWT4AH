import express from 'express'
import path from 'node:path'
const app = express()   //el servidor

app.use('/', express.static('public'))

app.get('/', (req, res) => {
  res.send("hola mundo")
})

app.get('/contact.html', (req, res) => {
  res.sendFile(path.resolve('public/index.html'))
} )


app.listen(2023)