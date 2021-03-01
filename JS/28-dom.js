'use strict'
//DOM Document Object Model
function cambiaColor(color) {
    caja.style.color = color;
}
/*
var caja = document.getElementById("micaja2");
caja.innerHTML = "ME CAMBIARON";
caja.style.background = "red";
caja.style.padding = "40px";
caja.style.color = "White";
caja.className = "Hola";

console.log(caja);

var todosLosDiv = document.getElementsByTagName("div");

var valor;
for (valor in todosLosDiv) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDiv[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
    console.log(valor);
}
*/
//traer elementos por clase

var divRojos = document.getElementsByClassName("rojo");
//divRojos[0].style.background = "red";
for (var div in divRojos) {
    if (divRojos[div].className == "rojo") {
        divRojos[div].style.background = "red";
    }
}
console.log(divRojos);


//Query Selector

var id = document.querySelector("#encabezado");
console.log(id);

var clases = document.querySelector("#div.rojo");
console.log(clases);

var etiqueta = document.querySelector("#div");
console.log(etiqueta);