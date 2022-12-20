let numero, decimal; //Declarar variables

    numero = prompt("Dame un numero decimal:");

    if(numero - Math.floor(numero) == 0){
        alert ("x_x Error no es un numero decimal");
    }else{
        decimal = numero - Math.floor(numero);
        console.log(decimal.toFixed(2));
    }