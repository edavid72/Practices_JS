const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 500 },
];

//Saber cuanto se tiene que pagar en total
//ForEach
let total = 0;

carrito.forEach((producto) => {
  return (total += producto.precio);
});

console.log(total);

//.reduce
const resultadoReduce = carrito.reduce(
  (total, producto) => total + producto.precio,
  0
);
console.log(resultadoReduce);
