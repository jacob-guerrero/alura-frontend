//Operadores de comparacion
const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//if
//Evalua una condicion
/* console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

const valorPasaje = 1000;

if (valorPasaje === 1000) {
    console.log("El pasaje vale 1000");
} */

//Operadores logicos
// Y(AND) - O (OR) - NO (NOT)
// AND = && - Se deben cumplir las 2 condiciones
// OR = || - Se debe cumplir una condicion al menos
// NOT ! - No se cumple la condicion

let edadPasajero = 19;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado)) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o no cumple las reglas");
}

edadPasajero = 17;
estaAcompanado = false;
// Aplicando logica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanado))) {
    console.log("Ciudad no disponible para viajar o no cumple las reglas");
} else {
    console.log("Pasaje disponible para venta");
}