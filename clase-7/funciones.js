async function A(){
    console.log("imprimo A")
    // let j;
    // j = b.j
    return 5 //<pendiente..>
}

// A()
// console.log("imprimo despues de A")

A()
    .then( (data) => console.log("correcto", data) ) //en el caso que se resulva de manera correcta
    .catch( (err) => console.error(err) )
    .finally( () => console.log("Me ejecuto si o si cuando termina la promesa") )

console.log("despues de la promesa")