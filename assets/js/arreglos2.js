let juegos = ['Zelda', 'Mario', 'Metroid', 'Final Fantasy'];
// console.log(juegos.length);

let primero = juegos[2 - 2 + 2 / 2];
let ultimo = juegos[juegos.length - 1]; // (.length) SE UTILIZA PARA SABER EL LARGO DEL ARREGLO

console.log({ primero, ultimo });

// (length) CUENTA EL LARGO DEL ARREGLO
juegos.forEach((elemento, indice, arr) => { // (forEach) PARA MOSTRAR TODOS LOS CAMPOS DEL ARREGLO
    console.log({ elemento, indice, arr });
});

// (push) PARA AGREGAR UN NUEVO ELEMENTO AL FINAL DEL ARREGLO
let nuevoJuego = juegos.push('F-Zero');
console.log({ nuevoJuego, juegos });

// (unshift) PARA AGREGAR UN ELEMENTO AL PRINCIPIO DEL ARREGLO
nuevoJuego = juegos.unshift('Lufia');
console.log({ nuevoJuego, juegos });