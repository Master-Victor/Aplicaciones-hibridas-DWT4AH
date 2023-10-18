let array = [ 1,2,3,4 ]
let array2 = [ 2,4,6 ]

function suma(array, callback){
    let suma = 0
    for( let i = 0; i< array.length ; i++ ){
        suma+= callback(array[i])
    }
    return suma
}

console.log("La suma es: ",suma(array, function (elemento){
    return elemento
}))
console.log("La suma de pares ",suma(array, function (elemento){
    return (elemento % 2 == 0) ? elemento : 0
}))
console.log("La suma de impares ",suma(array, function(elemento){
    return (elemento % 2 != 0) ? elemento : 0
}))

//funciones nombradas
/*
function impar(elemento){
    return (elemento % 2 != 0) ? elemento : 0
}
*/
//funciones anonimas
let data = function(elemento){
    return (elemento % 2 != 0) ? elemento : 0
}