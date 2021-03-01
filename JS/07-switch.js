'use strict'
//Switch
var edad = 21;
var imprimir = "";
switch (edad) {
    case 18:
        imprimir = "18";
        break;
    case 21:
        imprimir = "21";
        break;
    case 75:
        imprimir = "75";
    default:
        imprimir = "Te jodiste"
        break;
}
console.log(imprimir);
