'use strict'
var time, position, resultados;

//window.addEventListener("load", () => {
 
var enviar = document.querySelector("#boton");
enviar.addEventListener("click", () => {
    var r = new Array();
    var n1 = document.querySelector("#name");
    var a1 = document.querySelector("#lastName");
    var e1 = document.querySelector("#edad");
  
    r.push(n1.value, a1.value, e1.value);
    var caja = document.querySelector("#cuerpoTabla")
    caja.innerHTML = "<tr><th scope='row'> "+n1.value+"</th><td>"+a1.value+"</td><td>"+e1.value+"</td></tr>";
    console.log(r);
    
    return r;

});
var mostrar = document.querySelector("#boton2");
mostrar.addEventListener("click", () =>{
    var r = new Array();
    var n1 = document.querySelector("#name");
    var a1 = document.querySelector("#lastName");
    var e1 = document.querySelector("#edad");
  
    r.push(n1.value, a1.value, e1.value);
    alert(r);
   
});



//});