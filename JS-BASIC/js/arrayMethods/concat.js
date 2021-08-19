//Concat
/* ----------->Ejemplo 01 */
const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = [
  'Julio',
  'Agosto',
  'Septiembre',
  'octubre',
  'Noviembre',
  'Diciembre',
];

let mesesAll = meses1.concat(meses2);

console.log(mesesAll);

/* ----------->Ejemplo 02 */
const animes1 = ['Naruto', 'Bleach'];
const animes2 = ['One Piece', 'FMA'];
const animes3 = ['HxH', 'One Punch Man'];

let animesAll = animes1.concat(animes2, animes3);

console.log(animesAll);

/* ------------->Ejemplo 03 */
const mangas1 = ['Shingeki no kioyin'];
const mangas2 = ['Gantz', 'Monster'];

let mangasAll = [...mangas1, ...mangas2];
console.log(mangasAll);

/* ----------->Ejemplo04 ---Agregar otro elemento po fuera */
const paises1 = ['HN', 'USA'];
const paises2 = ['MX', 'CR'];

let paisesAll = [...paises1, ...paises2, "AR"];
console.log(paisesAll);