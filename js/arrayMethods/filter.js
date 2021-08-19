const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 500 },
];

let resultado;

resultado = carrito.filter((producto) => producto.precio > 200);
console.log(resultado);

//excluir un elemento

let exclusion;

exclusion = carrito.filter((producto) => producto.nombre !== 'Tablet');

console.log(exclusion);

//Un elemento especifico
let expesifico;

expesifico = carrito.filter((producto) => producto.nombre === 'Teclado');
console.log(expesifico);