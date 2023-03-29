
const dia = 0;
const horaActual = 10; // new Date().getHours() TRAE LA FECHA Y HORA ACTUAL

let horaApertura;
let mensaje;

//if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) { // ES LO MISMO QUE EL CODIGO DE ARRIBA (includes) VERIFICA QUE EL DIA ESTE DENTRO DE LOS QUE ESTEN EN EL ARREGLO SI SE CUMPLE DA (true) de lo contrario (false)
//     console.log('Fins de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11 // SI LO DEL ARREGLO SE CUMPLE 

if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log(horaApertura, mensaje)



