// ---UNA DE LAS FORMS DE DECLARA UNA FUNCION---
function crearPersona1(nombre, apellido) {
    return { nombre, apellido }
}
const persona1 = crearPersona1('Fray ', 'De Jesus');
console.log(persona1);


// ---DECLARA LA FUNCION ANTERIOR EN FLECHA---
const crearPersona2 = (nombre, apellido) => {
    return { nombre, apellido }
}
const persona2 = crearPersona2('Fray ', 'De Jesus');
console.log(persona2);


// ---DECLARA LA FUNCION ANTERIOR EN FLECHA QUE TIENEN 1 SOLO RETURN---
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido });

const persona3 = crearPersona3('Fray ', 'De Jesus');
console.log(persona3);


// ---UNA DE LAS FORMS TRABAJAR EL (arguments)---
function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10, 'fray', 'de jesus', true, false, [1, 2, 3]);


// ---ARGUMENTS EN FUNCION DE FLECHA---
function imprimeArgumentos2(fray, ...args) { //... HACE REFERENCIA AL PARAMETRO REST (PARA TRAER UN VALOR INDEPENDIENTE) EJ NOBRE 
    console.log({ fray, args });
}
imprimeArgumentos2(10, 'fray', 'de jesus', true, false, [1, 2, 3]);

