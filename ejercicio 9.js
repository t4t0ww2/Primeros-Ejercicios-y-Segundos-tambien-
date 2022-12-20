let n, contador=1, pi=0, primos = 1;
    n = parseInt(prompt("Dame el limite:"));
    while(contador<=n){
        if(contador%2 == 0){
            pi = pi - (1/primos);        
        }else{
            pi = pi + (1/primos);
        }
        primos = primos + 2;
        contador++;

    }
    console.log("n:",n);
    console.log(4*pi);