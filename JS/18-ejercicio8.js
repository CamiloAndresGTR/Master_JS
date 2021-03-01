'use strict'
// Calculadora que pida dos numeros por pantalla
//Si metemos mal un numero pida que se introduzca nuevamente
//muestre en el body de la pagina, en una alerta y por consola el resultado de suma, resta multiplicar y dividir esas dos cifras

var numero1;
var numero2; 

while (isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
    numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));
}
var suma = numero1 + numero2;
var multi = numero1 * numero2;
var resta = numero1 - numero2;
var divi = numero1 / numero2;
alert("La suma de los dos numero es: " + suma);
alert("La resta de los dos numero es: " + resta);
alert("La multiplicación de los dos numero es: " + multi);
alert("La división de los dos numero es: " + divi);
console.log("La suma de los dos numero es: " + suma);
console.log("La resta de los dos numero es: " + resta);
console.log("La multiplicación de los dos numero es: " + multi);
console.log("La división de los dos numero es: " + divi);

document.write("<h1>Calculadora</h1>");
document.write("La suma de los dos numero es: " + suma+"<br/>");
document.write("La resta de los dos numero es: " + resta+"<br/>");
document.write("La multiplicación de los dos numero es: " + multi+"<br/>");
document.write("La división de los dos numero es: " + divi+"<br/>");