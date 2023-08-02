//const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const appellidoPasajero = "Lacruz";

console.log(nombrePasajero);
console.log(appellidoPasajero);

//var
//Espacio de memoria que puede cambiar durante la ejecucion del programa
//El alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + appellidoPasajero;

//Bloque
{
    //let
    //Espacio de memoria que pueda cambiar durante la ejecucion del programa
    let nombreCompletoPasajero = nombrePasajero + " " + appellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);

    console.log("Variable con var: " + nombreCompletoDelPasajero)
}

// console.log("Variable con let: " + nombreCompletoPasajero); //NO esta definido fuera del bloque
console.log("Variable con var: " + nombreCompletoDelPasajero)
