const carrito = [
  { nombre: 'Monitor', precio: '300' },
  { nombre: 'Laptop', precio: '750' },
  { nombre: 'Carro', precio: '3500' },
  { nombre: 'Moto', precio: '1400' },
  { nombre: 'Refrigerador', precio: '700' },
  { nombre: 'Aire A/C', precio: '500' },
  {},
];

const arreglo1 = carrito.map((producto) => {
  return producto.precio;
});

console.log(arreglo1);