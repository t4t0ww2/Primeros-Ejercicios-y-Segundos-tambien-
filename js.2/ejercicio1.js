let limitador = parseInt(prompt("ingresa los num que quieres ingresar"));
var numeros = new Array(limitador);
for(var i = 0; i < numeros.length; i++){
    let numero = parseInt(prompt("Dame numero")); 
    numeros[i] = numero;
}

let x = parseInt(prompt("Ingresa valor para checar"));
var mayor = 0;
for(i = 0; i < numeros.length; i++){
    if(numeros[i] > x){
        mayor++;
    }
}
console.log("De tu lista,", mayor,"valores son mayor a ",x);