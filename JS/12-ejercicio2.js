'use strict'
/*
Usando un bucle mostrar la media y la suma de los numeros introducidos hasta que el usuario introduzca un numero negativo
*/

var suma = 0;
var contador = 0;


do {
    var numero = parseInt(prompt("Ingresa un número: ", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador ++;

    }
    console.log(suma);
    console.log(contador);

} while (numero >= 0 )

alert("suma "+suma);
alert("media "+(suma/contador));