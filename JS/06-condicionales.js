'use strict'

//Condicional IF
//Es una estructura de control que nos permite comparar algo 
//Si A es igual a B entonces instrucción
var edad1 = 30;
var edad2 = 12;
if (edad1 > edad2) {
    console.log("Edad 1 es mayor que edad 2")

} else {
    console.log("La cagó")
}

//operadores: == Igual, != Diferente, <> Mayor y menor que, >= Mator o igual, <= Menor o igual
var edad = 70;
var nombre = "David Suarez";
if (!(edad < 18)) {
    console.log(nombre + " tiene " + edad + " años ")
    if (edad < 34) {

        console.log("Millenial")
    } else if (edad >= 70) {
        console.log("Anciano")
    }
    else {
        console.log("No Millenial")
    }

} else {
    console.log(nombre + " Jodase ")
}

/*Operadores Lógicos
AND: &&
OR: ||
Negacion: !
*/
var year = 2020;
if ((year < 2000 && year > 1900) || year == 2020) {
    console.log("Quedó bien")
} else {
    console.log("Jodete")
}