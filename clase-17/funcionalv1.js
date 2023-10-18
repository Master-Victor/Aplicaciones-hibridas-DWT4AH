let array = [ 1,2,3,4 ]
let array2 = [ 2,4,6 ]

function suma(array, callback){
    let suma = 0
    for( let i = 0; i< array.length ; i++ ){
        suma+= callback(array[i])
    }
    return suma
}

function todos(elemento){
    return elemento
}

function pares(elemento){
    return (elemento % 2 == 0) ? elemento : 0
}

function impar(elemento){
    return (elemento % 2 != 0) ? elemento : 0
}

console.log("La suma es: ",suma(array, todos))
console.log("La suma de pares ",suma(array, par))
console.log("La suma de impares ",suma(array, impar))