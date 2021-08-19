const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 500 },
];

//Con forEach
let resultado = [];

carrito.forEach((producto, index) => {
  if (producto.nombre === 'Celular') {
    resultado = carrito[index];
  }
});

console.log(resultado);

//Con Find
const resultado2 = carrito.find((producto) => producto.nombre === 'Teclado');
console.log(resultado2);