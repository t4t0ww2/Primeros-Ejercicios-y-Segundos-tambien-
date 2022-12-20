let n = 0, numeros = 0, mayor = -99999, contador = 1;

n = parseInt(prompt("Dime cuantos numeros vas a almacenar:"));

while(contador <= n){
    numeros = parseInt(prompt("Ingrese numero:"));
    console.log(numeros);
    if(numeros > mayor){
        mayor = numeros;
    }
    contador++;
}
console.log("el mayor es: ",mayor);    