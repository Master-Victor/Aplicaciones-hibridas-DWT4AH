// una funcion asincronica, al ser llamada retorna una promesa
async function A() {
    console.log("A")
    return 5
}

async function B() {
    console.log("B")
    return 6
}

async function C() {
    console.log("C")
    return 7
}

async function D() {
    console.log("D")
    return 8
}

async function suma(){
    let suma = 0
    return A()
        .then( (data) => {
            suma += data
            return B()
        } )
        .then( (data) => {
            suma += data
            return C()
        } )
        .then(function (data) {
            suma += data
            return D()
        })
        .then( (data) => {
            suma += data
            return suma
        } )
}

console.log("inicio")
suma().then(data => console.log("datos", data))
console.log("termino")

async function sum2(){
    console.log("inicio")
    let suma = 0
    suma += await A()
    suma += await B()
    suma += await C()
    suma += await D()
    console.log("termino")
    return suma
}

async function E(){
    return 10
}
E()
    .then( async(data) => {
        console.log("inicio")
        let suma = 0
        suma += await A()
        suma += await B()
        suma += await C()
        suma += await D()
        console.log("termino")
    } )
    .finally(() => console.log("me desconecte del servidor"))