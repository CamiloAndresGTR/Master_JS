'use strict'

//Hacer un programa que muestre todos los numero entre dos numero introducidos por el usuario

var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));

document.write("<h1>De "+numero1+" hasta " + numero2+" están estos números: </h1>");
for (var i = numero1; i <= numero2; i++) {
    document.write(i+"<br/>");
console.log(i)
};