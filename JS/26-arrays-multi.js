'use strict'

var categorias = ["Acción", "Comerdia", "Terror"];
var peliculas = ["Aladdin", "Anabelle", "Sapi Return"];
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);
var cine = [categorias, peliculas];
/*
console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);

var indice = peliculas.indexOf("Sapi Return");

if (indice > -1) {
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();

console.log(peliculas_string);
peliculas.push("Batman");
console.log(peliculas);

while (elemento != "ACABAR") {
    elemento= prompt("Introduce una pelicula:");
    peliculas.push(elemento);
}

var elemento = ""; //prompt("Introduce una pellicula, para terminar digita ACABAR:");
do {
    elemento = prompt("Introduce una pelicula:");
    peliculas.push(elemento);

} while (elemento != "ACABAR");
peliculas.pop();


console.log(peliculas);
*/

