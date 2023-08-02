//Tipos de datos

//Alfanumerico
let nombrePasajero = "Pedro Silva";
nombrePasajero = "Ramon Silva";

//Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Logicos (true,false)
let boletoActivo = true;

//Operaciones Aritmeticas
//Suma
let totalBoletos = valorBoleto + gestionAgencia;
console.log(totalBoletos);

//Orden de precedencia
// ()
// * y /
// + y -
let totalBoletos2 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

//Concatenacion de texto
let nombrePasajero2 = "Leonardo";
let appellidoPasajero2 = "Lacruz";

let nombreCompleto = nombrePasajero2 + appellidoPasajero2;
let pasaporte = parseFloat("1000") + parseInt("12");
let multiplicacion = parseInt("1000") / parseFloat("10");

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt("AASAA");
console.log(noEsUnNumero);