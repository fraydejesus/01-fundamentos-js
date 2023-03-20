
let personaje = {
    nombre: 'Fray',
    primelApellido: 'De Jesus',
    segundoApellido: 'Borrome',
    direccion: {
        calle: 'Orlando Martinez',
        ubicacion: 'Guraricanos',
    },
    trajes: ['mark 1', 'mark 3', 'mark 5'],
    vivo: false,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre', 'primelApellido']);
console.log(personaje.direccion.calle);

console.log(personaje.trajes.length);
console.log(personaje.trajes[personaje.trajes.length - 1]); // PARA TRAER EL NOMBRE EL ULTIMO ELEMENTO DEL ARREGLO

const x = 'vivo';
console.log('vivo', personaje[x]);

// MAS DETALLES

// (delete) PARA BORRAR UN ELEMENTO DEL OBJETO
delete personaje.primelApellido;
console.log(personaje);


// PONER QUE SE VEAN COMO PARES DE VALORES
const empareja = Object.entries(personaje);
console.log(empareja);

// PARA CREAR UNA NUEVA PROPIEDAD EN EL OBJETO O AL MOMENTO DE LA EJECUCION




