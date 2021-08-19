const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
  { nombre: 'Monitor 27 pulgadas', precio: 500 },
  { nombre: 'Television', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];

//Buscar en indice de un elemento

//ForEach
meses.forEach((mes, i) => {
  console.log(`El mes de ${mes} se encuentra en el indice ${i}`);
});

//FindIndex, encontrar el indice de abril
const indice = meses.findIndex((mes) => mes === 'abril');
console.log(indice);

const indice2 = meses.findIndex((mes) => mes === 'junio');
console.log(indice2);
