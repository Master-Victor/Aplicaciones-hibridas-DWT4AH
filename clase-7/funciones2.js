async function A(){
    console.log("imprimo A")
    return 5
}

async function B(){
    console.log("imprimir B")
    
    //k.a;

    return A()
    .then( (data) => {
        return data * 2
    } )
    .catch(() => 0 )
}

B()
    .then(function (data) {
        console.log("Termino B con exito", data)
        return data * 2
    })
    .catch(function (data) {
        console.log("Termino B con error", data.message)
        return 1000
    })
    .then(function (data) {
        console.log("Termino B con exito", data)
        return data * 2
    })