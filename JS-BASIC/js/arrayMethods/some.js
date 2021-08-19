const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

//Comprobar si un valor existe en un arreglo

//ForEach
meses.forEach((mes) => {
  if (mes === 'enero') {
    console.log('Ese mes si existe');
  }
});

//.Includes
const resultado = meses.includes('enero');
console.log(resultado);

//.Some, para arreglos de objetos
//1
const existe = carrito.some((producto) => {
  return producto.nombre === 'Tablet';
});

console.log(existe);

//2
const resultado2 = meses.some((mes) => {
  return mes === 'enero';
});

console.log(`El mes con .some si existe ${resultado2}`);
