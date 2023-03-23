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
    return 10;  // ES LO QUE RETORNA LA FUNCION (CUANDO NO TIENE return debuelve undefine)
}; // El codigo despues del return  no se lee


const saludarFlecha = () => {
    console.log('Hola Flecha ');
}


const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


saludar('Fray'); // SE COLOCA EL VALOR DE (nombre)
saludarFlecha();
saludarFlecha2('Fray De Jesus');


// FUNCION DE SUMA
function sumar(a, b) {
    return a + b;
}

// FUNCION DE SUMA
const sumar2 = (a, b) => {
    return a + b;
}

// FUNCION DE FLECHA EN UNA SOLA LINEA
const sumar3 = (a, b) => a + b;
console.log(sumar3(1, 2));

// FUNCIO QUE RETORNA UN NUMERO RANDOM
function getAleatorio() {
    return Math.random()
};

console.log(getAleatorio());

// FUNCION DE FLECHA SIN LLAVES
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());


const hi = (nombre) => {
    console.log('Hola ' + nombre);
}
hi('Fray');


