// (funtion)

function saludar() {
    console.log('Hola Mundo')
};

// OTRA FORMA DE DECLARAR UNA FUNCION EN ESTE CASO LO QUE SE IMPRIME NO PUEDE CAMBIAR 
const saludar2 = function () {
    console.log('Hola Mundo')
};


// ASIGNAR UNA VARIABLE A LA FUNCION
function saludar(nombre) {
    console.log('Hola ' + nombre);
};

saludar('Fray'); // SE COLOCA EL VALOR DE (nombre)
