'use strict'
/*
Funciones anonimas son funciones que no tienen nombre, se usan para hacer callback(una funcion que se ejecuta dentro de otra)


var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

console.log(pelicula("IT"));

function sumame(numero1, numero2) {
    var sumar= numero1+numero2;
    
    return sumar;
    
}
console.log(sumame(4,5));
*/

function sumame(numero1, numero2, sumaYMuestra, sumaPorDos) {
    var sumar= numero1+numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
    
};
sumame(5,7,function(dato){
console.log("La suma es: ", dato)
},function (dato) {
    console.log("La suma por dos es: ", (dato*2))
}
);
sumame(5,7,dato =>{
    console.log("La suma es: ", dato)
    },dato => {
        console.log("La suma por dos es: ", (dato*2))
    }
    );