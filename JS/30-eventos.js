'use strict'

window.addEventListener("load", () =>{
    function cambiarColor() {
        console.log("Me has dado click");
    
        var bg = boton.style.background;
    
        if (bg == "green") {
            boton.style.background = "red";
    
        } else {
            boton.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }
    var boton = document.querySelector("#boton");
    //Evento Click
    /*
    boton.addEventListener("click", function () {
        cambiarColor();
    });
    */
    //Evento mouseover
    boton.addEventListener("mouseover", function () {
        boton.style.background = "green";
    });
    //Evento mouseout
    boton.addEventListener("mouseout", function () {
        boton.style.background = "#ccc";
    });
    
    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener("focus", function () {
        console.log("Estas dentro del input ");
    });
    
    //Blur
    input.addEventListener("blur", function () {
        console.log("[Blur] Estas fuera del input");
    });
    
    //keydown
    input.addEventListener("keydown", (event) => {
        console.log("[Keydown] Pulsndo la tecla: ", String.fromCharCode(event.KeyCode));
    });
    
    //keypress
    input.addEventListener("keypress", function (event) {
        console.log("[keypress] Pulsndo la tecla: ", String.fromCharCode(event.KeyCode));
    });
    
    //keyup
    input.addEventListener("keyup", function (event) {
        console.log("[keyup] Pulsndo la tecla: ", String.fromCharCode(event.KeyCode));
    });

});

