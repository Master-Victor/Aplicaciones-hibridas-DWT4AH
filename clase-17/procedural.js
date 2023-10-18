let array = [ 1,2,3,4 ]
let array2 = [ 2,4,6 ]

function suma(array){
    let suma = 0
    for( let i = 0; i< array.length ; i++ ){
        suma+= array[i]
    }
    return suma
}

function par(array){
    let suma = 0
    for( let i = 0; i< array.length ; i++ ){
        suma+= (array[i] % 2 == 0) ? array[i] : 0 
    }
    return suma    
}

function impar(array){
    let suma = 0
    for( let i = 0; i< array.length ; i++ ){
        suma+= (array[i] % 2 != 0) ? array[i] : 0 
    }
    return suma    
}

console.log("La suma es: ",suma(array))
console.log("La suma2 es: ",suma(array2))