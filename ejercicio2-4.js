let numero = 1, negativos = 0, positivos = 0;
let mayor = -999999, menor = 999999, c_positivos = 1, c_negativos = 1;
let linea_texto_positivos = "", linea_texto_negativos = "";

while(numero != 0){
    numero = parseInt(prompt("Almacena un numero"));
    console.log(numero);

    if (numero < 0){
        negativos ++;
    }else if(numero > 0){
        positivos ++;
    }

    if(numero > mayor){
        mayor = numero;
    }

    if(numero < menor){
        menor = numero;
    }
}

while(c_positivos <= positivos){
    c_positivos++;
    linea_texto_positivos += "*" ;
}

while(c_negativos <= negativos){
    c_negativos++;
    linea_texto_negativos += "*"
}
console.log("Cantidad de positivos:",linea_texto_positivos);    
console.log("Cantidad de negativos:", linea_texto_negativos);
console.log("mayor numero ingresado:", mayor);
console.log("menor numero ingresado:", menor);