'use strict'
//Pida 6 numeros por pantalla y los meta en un array



var arreglo = new Array();
for (let i = 0; i < 6; i++) {
    var element1 = parseInt(prompt("Ingrese un numero", 0));
    arreglo.push(element1);
};
console.log(arreglo);
//Ordenar el array y mostrarlo ordenado
arreglo.sort(function (a, b) { return a - b });

console.log(arreglo);
function mostrarArray(elementos) {
    document.write("<ol>");
    for (let elemento in arreglo) {
        document.write("<li>" + arreglo[elemento] + "</li>")
    };
    document.write("</ol>");

};

//Mostrar el Array Entero en el cuesrpo de la página
mostrarArray(arreglo);

//Invertir su orden y mostrarlo

arreglo.reverse(function (a, b) { return a - b });
mostrarArray(arreglo);
// mostrar cuantos elementos tiene el array
var indice = arreglo.length;
document.write("</br>La cantidda de elementos del Array es: " + indice);

//busqueda de valor introducido por el usuario
var criterio = prompt("Ingrese el numero a buscar dentro del arreglo: ", 0);
var busqueda = arreglo.find(numero => numero == criterio);
var index = arreglo.findIndex(numero => numero == criterio);
console.log(index)
if (busqueda == undefined) {
    document.write("</br>El valor buscado no existe dentro del array</br>");
} else {
    document.write("</br> El resultado de la busqueda es: " + busqueda + " y se encuentra en la posicion numero: " + index);
}

//diga si está en el array y su posición o iondice