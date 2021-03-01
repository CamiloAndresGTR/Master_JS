'use strict'
/*
Ejercicios:
1.Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales.
1.1. Si los caracteres no son numeros o son menores que 0 pida nuevamente los datos
 
*/
var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));
/*
var resultado = "";
console.log("KKK");
switch (numero1, numero2) {
    case numero1 < numero2:
        resultado = "El numero mayor es: " + numero2;
        break;
    case numero2 < numero1:
        resultado = "El número mayor es: " + numero1;
        break;
    case numero1 == numero2:
        resultado = "Los numeros son iguales";
        break;
    default:
        break;
}
console.log("YYY");
alert(resultado);
console.log(resultado);
*/
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
    numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));
}
if (numero1 < numero2) {
    alert("El numero mayor es: " + numero2 + " y el número menor es: " + numero1);
} else if (numero2 < numero1) {
    alert("El numero mayor es: " + numero1 + " y el número menor es: " + numero2);
} else if (numero1 == numero2) {
    alert("Los numeros son iguales");
}