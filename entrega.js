alert(`Sabes como calcular cuantos numeros pares hay entre 2 numeros?

    Para saber cuantos numeros pares hay entre 2 numeros.

    vas a ingresar el numero inicial y el numero final

    ejemplo: desde el 1 hasta el 100. ingreso 1 y 100`);


let numeroInicial = parseFloat(prompt("ingrese el numero inicial"))
let numeroFinal = parseFloat(prompt("ingrese el numero final"))



function sumarNumerosPares(inicial,final){
    let suma = 0;
    for(let i = inicial; i <= final; i++){
        if(i % 2 === 0){
            suma+=1;
        }
    }
    return suma;
}

const resultado = sumarNumerosPares(numeroInicial, numeroFinal)

alert(`La cantidad de numeros pares que hay entre ${numeroInicial} y ${numeroFinal} son: ${resultado} numeros.`)






