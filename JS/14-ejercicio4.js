'use strict'
/*
Mostrar todos los números impares que hay entre dos numeros
*/
var numero1 = parseInt(prompt("Ingresa el primer número: ", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número: ", 0));

document.write("<h1>De "+numero1+" hasta " + numero2+" están estos números impares: </h1>");
for(var i=numero1;i<=numero2;i++){
if ((i%2)!=0) {
    document.write(i+"<br/>");
}
};