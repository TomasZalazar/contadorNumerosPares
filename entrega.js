alert(
`Sabes cuantos numeros pares hay entre 2 numeros positivos?

Para saber cuantos numeros pares hay entre 2 numeros positivos.

Ingresar el numero inicial y el numero final, ambos positivos.

Ejemplo: desde el 1 hasta el 100. ingreso 1 y 100`);



let numeroInicial = parseInt(prompt("ingrese el numero inicial"))
let numeroFinal = parseInt(prompt("ingrese el numero final"))
if (isNaN(numeroInicial) || isNaN(numeroFinal) || numeroInicial > numeroFinal || numeroFinal < numeroInicial) {
    alert("Ingresaste datos incorrectos o negativos. Por favor, asegurate que el numero incial sea mas chico que el numero final.");
    
}  else {
    function sumarNumerosPares(inicial, final) {
        let contador = 0;
        for (let i = inicial; i <= final; i++) {
            if (i % 2 === 0) {
                contador++;
            }
        }
        return contador;
    }

    const resultado = sumarNumerosPares(numeroInicial, numeroFinal);
    alert(`La cantidad de números pares que hay entre ${numeroInicial} y ${numeroFinal} es: ${resultado} números.`);
}







// function validacionDeFormularios(){

//     let usuario = prompt("ingrese su usuario: ")

//     if(usuario != ""){
//         console.log("bienvenido: "+ usuario)
//     }else{
//         console.log("ingresa un usuario correcto")
//     }

// }
// validacionDeFormularios()
// let producto1 = 500
// let producto2 = 2000

// let sumarProductos = function (prod1, prod2){

//     return prod1 + prod2
// }
// let totalProductos= sumarProductos(producto1,producto2)


// let envio = 2500

// function preciofinal(totalProductos, envio){

//     return totalProductos + envio
// }

// let precioTotal= preciofinal(totalProductos,envio)

// console.log("el precio final es de: "+ precioTotal)
