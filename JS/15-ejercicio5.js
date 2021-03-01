'use strict'
/*
 Todos los números divisores de un numero introducido en un prompt
 */

var numero = parseInt(prompt("Ingresa el primer número: ", 0));
document.write("<h1>Los números divisores de  " + numero + " Son:  </h1>");
for (var i = 0; i <= numero; i++) {
    if ((numero % i) == 0) {
        document.write(i + "<br/>");
    }
};

