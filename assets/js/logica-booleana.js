// AND (&&)

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negacion');
console.log(true);
console.log(!true); // (!) CAMBIA EL RESULTADO SI ES (true lo cambia a false y lo contrario)
console.log(!false);

console.log(!regresaFalse());

console.warn('and'); // REGRESA true SI TODOS LOS VALORES SON VERDADEROS 
console.log(true && true);
console.log(true && !false);

console.log(regresaFalse() && regresaTrue()); //CUAND LA PREIMERA ES false ya no evalua POR QUE EL RESULTADO ES FALSO
console.log(regresaTrue() && regresaFalse()); //EVALUA TODO YA QUE LA PRIMERA ES VERDADERA

regresaTrue() && regresaFalse()  // ES PERMITIDO 


// OR (||) REGRESA VERDADERO SIEMPRE Y CUANDO AYA 1 VALOR VERDADERO

console.warn('or');
console.log(true || true);
console.log(!true || false);

console.log(regresaTrue() || regresaFalse());
