let tiempo = 1, suma=0, contador=1, tiempo_total;
    while(tiempo != 0){
        tiempo = parseInt(prompt("duracion de tramo:"));
        suma = tiempo + suma;
        console.log("Dración",contador,": ",tiempo);
        contador++;
    }
    tiempo_total = suma/60;
    console.log("Duración total: ",tiempo_total.toFixed(2), "horas con minutos");
