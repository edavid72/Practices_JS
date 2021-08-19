const producto = {
  nombre: 'TV',
  marca: 'LG',
  pantalla: 'LCD',
};

producto.color = 'Azul';

console.log(producto);

//Destructuring

const { nombre, marca, pantalla, color } = producto;

console.log(
  `Este producto es un ${nombre} de la marca ${marca} con pantalla ${pantalla}`
);

const usuario = {
  name: 'david',
  lastName: 'Cervellon',
  age: '30',
  city: 'SPS',
  mostrarInfo: function users() {
    console.log(
      `Este usuario se llama ${this.name} y tiene ${this.age} años de edad`
    );
  },
};

usuario.mostrarInfo();
