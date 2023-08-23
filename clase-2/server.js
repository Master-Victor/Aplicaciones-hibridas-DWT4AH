const http = require('node:http')

/**
 * reques es lo que envia el cliente
 * response es lo que responde el servidor
 */
const server = http.createServer(function (request, response) {
    console.log('Hola te estoy escuchando')
    console.log("Solicitud: ", request.url)

    if (request.url == "/") {
        response.write("Hola Mundo")
    }
    else if (request.url == "/hola") {
        response.write("Hola que hace!")
    }
    else {
        response.write("No se encuentra la pagina")
    }

    response.end()
})


server.listen(2023)