/* Seleccionar Elementos por su clase */

const header = document.getElementsByClassName('header');
console.log(header);

const Hero = document.getElementsByClassName('hero');
console.log(Hero);

const Busqueda = document.getElementsByClassName("busqueda")
console.log(Busqueda);

const Contenedor = document.getElementsByClassName('contenedor')
console.log(Contenedor);

/* Sin una clase no Existe */
const noExiste = document.getElementsByClassName('noexiste')
console.log(noExiste);