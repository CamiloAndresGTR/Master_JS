'sue strict'
//Arrays/ Arreglos / Matrices

var nombre = "Victor Robles";
var nombres = ["Andres Guevara", "Yonathan Beltran", "Patty Contreras", "Selma Sanabria", "Calvin Klein", "Jackson Arley", "Carlos David", "Edna Modax"];
//                  0           ,       1           ,       2         ,         3       ,       4        ,      5        ,         6     ,      7
var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#", "Pyton");
//                          0  ,   1 ,  2  ,    3   ,  4 ,     5

console.log(nombres);
console.log(nombres[1]);
console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que: " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
//alert(nombres[elemento]);
nombres.forEach(element => console.log(element));

document.write("<h3>Resultado For</h3>");
for (var i = 0; i < lenguajes.length; i++) {
    document.write((i + 1) + ". " + lenguajes[i] + "<br/>");
};
document.write("<br/><h3>Resultado ForEach</h3><br/>");
nombres.forEach(element => document.write(element + "<br/>"));

