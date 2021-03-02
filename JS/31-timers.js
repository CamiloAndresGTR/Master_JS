'use strict'
/*
window.addEventListener("load", ()=> {
//Timers
var tiempo = setInterval(()=>{
console.log("Se esta ejecutando el intervalo");
document.querySelector("h1").style.fontSize = "60px";
},3000);
});
*/

window.addEventListener("load", () => {
    //Timers
    function intervalo() {


        var tiempo = setInterval(() => {
            console.log("Se esta ejecutando el intervalo");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);
        return tiempo;
    }
    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        alert("Has detenido el bucle");
        clearInterval(tiempo);
    });
    var start = document.querySelector("#start");
    start.addEventListener("click", () => {
        alert("Has iniciado el bucle");
        intervalo();
    });
});