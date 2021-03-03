'use strict'

window.addEventListener("load", () => {

    var form = document.querySelector("#myform");
    form.addEventListener("submit", () => {
        console.log("Submit capturado");
        var nombre = document.querySelector("#name").value;
        var apellido = document.querySelector("#lastName").value;
        var edad = document.querySelector("#edad").value;
        var r = new Array();
        r.push(nombre, apellido, edad);
        var caja = document.querySelector("#cuerpoTabla")
        caja.innerHTML = "<tr><th scope='row'> " + nombre + "</th><td>" + apellido + "</td><td>" + edad + "</td></tr>";
        console.log(r);

    });
    var mostrar = document.querySelector("#boton2");
    mostrar.addEventListener("click", () => {
        var r = new Array();
        var nombre = document.querySelector("#name").value;
        var apellido = document.querySelector("#lastName").value;
        var edad = document.querySelector("#edad").value;

        r.push(nombre, apellido, edad);
        alert("Los datos introducidos son: "+r);
    });
    
});