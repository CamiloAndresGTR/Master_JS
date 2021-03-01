'use strict'
/*
 Que diga si un numero es par o impar
 1. Ventana que pida el número
 2. Si no es valido que pida el numero de nuevo
 */
var numero = parseInt(prompt("Ingresa el primer número: ", 0));
while (numero <= 0 ||  isNaN(numero)) {
    numero = parseInt(prompt("Ingresa el primer número: ", 0));
 
}
if((numero%2)==0){
    alert("Par");
}else{
    alert("impar")
}