let inicio, final, suma = 0;
    inicio = prompt("dame el numero donde vamos a iniciar:");
    final = prompt("dime donde terminar");

    inicio++;
    console.log("numeros que se estan sumando:")
    while(inicio < final){
        suma = suma + inicio;
        console.log(inicio);
        inicio++;
    }

    console.log("la suma es... : ",suma);    
