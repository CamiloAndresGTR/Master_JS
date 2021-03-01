'use strict'
//Plantillas de texto en JS
var name = prompt("METE TU NOMBRE");
var lastName = prompt("METE TUS APELLIDOS");


var texto = "Mi nombre es: " + name + "</br>" + "Mis apellidos son: " + lastName;

document.write(texto);
var texto2 = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${name}</h3>
<h3>Mis apellidos son: ${lastName}</h3>
`;// Comillas invertidas alt+96
document.write(texto2);