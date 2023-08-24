const PRODUCTOS = [
    { id: 1, name: 'Café Expreso', price: 200 },
    { id: 2, name: 'Café Americano', price: 250 },
    { id: 3, name: 'Café Cortado', price: 200 },
    { id: 4, name: 'Café Doble', price: 250 },
    { id: 5, name: 'Café Lagrima', price: 200 },
];
// En caso de tener mas de uno pueden hacerlo asi
// const PRODUCTOS_2 = [
//     { id: 1, name: 'Café Expreso', price: 200 },
//     { id: 2, name: 'Café Americano', price: 250 },
//     { id: 3, name: 'Café Cortado', price: 200 },
//     { id: 4, name: 'Café Doble', price: 250 },
//     { id: 5, name: 'Café Lagrima', price: 200 },
// ];

module.exports = PRODUCTOS

// y asi pueden exportarlo, pero recuerden que es un OBJETO!
// a la hora de importarlo podrian hacer data.PRODUCTOS o data.PRODUCTOS_2
// por eso no funcionaba esto -> en el codigo yo esperaba array pero era un objeto :) 
// module.exports = {
//     PRODUCTOS,
//     PRODUCTOS_2
// }