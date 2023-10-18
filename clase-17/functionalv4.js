let array = [ 1,2,3,4 ]
let array2 = [ 2,4,6 ]
console.log("La suma es: ",array.reduce( (previo, elemento) => previo + elemento, 0))
console.log("La suma de pares ",array.reduce( (previo, elemento) =>  previo + (elemento % 2 == 0 ? elemento : 0), 0))
console.log("La suma de impares ",array.reduce( (previo, elemento) => previo + (elemento % 2!= 0 ? elemento : 0), 0))