
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'juan' };
let ana = { ...juan }; // OPERADOS (...spret) SEPARA LAS PROPIEDADES Y VALORES DE 1 OBJETO PARA APLICARLO TIENEN QUE ESTAR ENTRE {}
ana.nombre = 'ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {  // OPERADOR (...rest) UNE TODOS LOS ARGUMENTOS EN 1 SOLA VARIABLE Y TRANSFORMALO EN 1 ARREGLO PARA APLICARLO TIENEN QUE ESTAR ENTRE ()
    persona.nombre = 'tony';
    return persona;

}

let peter = { nombre: 'peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

const frutas = ['manzanas', 'peras', 'piña'];


console.time('spret'); // PARA VER  QUE TIEMPO DURA EL PROCESO|
const otrasFrutas = [...frutas];//                            |
console.timeEnd('spret');//PARA VER QUE TIEMPO DURA EL PROCESO|                   


console.time('slice');
const otrasFrutas2 = frutas.slice(); // RETORNA UN ARREGLO CON LA NUEVA RELACION 
console.timeEnd('slice');



otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas });