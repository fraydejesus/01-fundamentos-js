// (Boolean) true / false
// (Null) Sin valor en lo absoluto
// (Undefined) Una variable sin valor
// (Number) Todos los numeros
// (String) Cadenas de texto
// (Symbol) es un valor unico que no es igual a ningun otro valor


// DATO PRIMITIVO (String)
let nombre = 'Fray De Jesus';
console.log(nombre);
// LOS String SE PUEDEN ESCRIBIR DE ESTAS FORMAS
nombre = 'Borrome';
nombre = "Alberto";
nombre = `Alberto`;
// PARA CAMBIAR EL TIPO DE DATOS SOLO HAY QUE CAMBIAR EL VALOR DE LA VARIABLE
// nombre = 123;
console.log(typeof nombre) // PARA VER EL TIPO DE DATOS (typeof)

//--------------------------------------------------------------------------------------------//

// DATO PRIMITIVO (boolean)
let esBerroa = false;
console.log(typeof esBerroa);

let esBorrome = true;
console.log(typeof esBorrome);

//--------------------------------------------------------------------------------------------//

// DATO PRIMITIVO (number)
let edad = 38;
console.log(typeof edad);

edad = 38.45;
console.log(typeof edad);

//--------------------------------------------------------------------------------------------//

// DATO PRIMITIVO VARIABLE NO DEFINIDA (Undefined)
let tomate;
console.log(typeof tomate);

//--------------------------------------------------------------------------------------------//

// DATO PRIMITIVO (null)
let soyNull = null;
console.log(typeof soyNull);

//--------------------------------------------------------------------------------------------//

// DATO PRIMITIVO (symbol)
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);
