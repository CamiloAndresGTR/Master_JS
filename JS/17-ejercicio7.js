'use strict'
/*
Tabla de multiplicar de un numero introducido por pantalla
*/
//var numero = parseInt(prompt("Ingresa el primer número: ", 0));
var multi = 0;
/*
while (isNaN(numero)) {
    numero = parseInt(prompt("Ingresa el primer número: ", 0));

}
*/

for(var numero=1;numero<10;numero++){
    document.write("<h1>Tabla del: "+numero+"</h1>");
for (var i = 1; i < 10; i++) {
    multi = numero * i;
    document.write(numero + " x " + i + " = " + multi+"<br/>");

}};