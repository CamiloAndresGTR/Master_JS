'use strict'

/*
Metodos que nos permiten transformar textos
*/
var numero1 = 444;
var texto1 = "Bienvenido al curso de JS de Andrés Guevara";
var texto2 = "Buenisimo";

console.log(numero1.toString());
console.log(texto1.toUpperCase());
console.log(texto2.toLowerCase());

//Calcular longitud
var nombre = "camilo andres guevara";

console.log(nombre.length);

//Concatenar
var total = texto1 + " " + texto2;
console.log(total);

var total2 = texto1.concat("Esta es una huevada, ") + texto2;
console.log(total2);

//Busqueda de texto
var busqueda = texto1.lastIndexOf("curso");
var busqueda2 = texto1.search("curso");
var busqueda3 = texto1.match(/curso/g);
var busqueda4 = texto1.substr(14, 5);
var busqueda5 = texto1.charAt(11);
var busqueda6 = texto1.startsWith("Bienvenido");
var busqueda7 = texto1.endsWith("Guevara");
var busqueda8 = texto1.includes("Guevara");
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);


//Reemplazar o cortar texto


var busqueda9 = texto1.replace("Guevara", "Triana");
var busqueda10 = texto1.slice(11,22);
var busqueda11 = texto1.split(" ");
var busqueda12 = texto1.trim();// Espacios
console.log(busqueda9);
console.log(busqueda10);
console.log(busqueda11);
console.log(busqueda12);



