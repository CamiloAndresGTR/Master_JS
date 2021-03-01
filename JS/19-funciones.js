'use strict'
/*Funciones
una funciopon es una agrupación reutilizable de un conjunto de instrucciones
*/

//defino la funcion
function calculator() {
    //Instrucciones
    return "Hola, orale";

}
//Invocar la función
console.log(calculator(), calculator());

var suma = 0;
var multi = 0;
function test2(numero1, numero2) {
    suma = numero1 + numero2;
    multi = numero1 * numero2;

    console.log(suma);
    console.log(multi);
    return suma, multi;

}
test2(2, 3);
alert(suma);
alert(multi);

function porConsola(numero1, numero2) {
    console.log("suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("***********************" + "<br/>");
    
}
function porPantalla(numero1, numero2) {
    document.write("suma: " + (numero1 + numero2)+ "<br/>");
    document.write("Resta: " + (numero1 - numero2)+ "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2)+ "<br/>");
    document.write("División: " + (numero1 / numero2)+ "<br/>");
    document.write("***********************" + "<br/>");
}

function calc3(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
       porConsola(numero1, numero2);
    } else {
      porPantalla(numero1, numero2);
    }


}
calc3(1, 4, true);