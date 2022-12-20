let n = 0, numeros = 1;

n = parseInt(prompt("dame un limite"));

while(numeros <= n)
    if(numeros%3 == 0 || numeros%7 == 0){}else{
        console.log(numeros);
    }
    numeros++;