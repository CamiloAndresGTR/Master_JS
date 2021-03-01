'use strict'
//Pruebas con let y var

//var
var numero=40;
console.log(numero);// Valor 40

if(true){
    var numero ="50";
    console.log(numero);// Valor 50
}
console.log(numero);// Valor 50

//let
var texto="Camilo123";
console.log(texto);// Camilo123

if(true){
    let texto ="Camilo1";
    console.log(texto);// Camilo1
}
console.log(texto);// Valor Camilo123