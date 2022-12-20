let n = 0, s1 = 1, s2 = 0, sumatoria = 0;

    n = parseInt(prompt("dame un limite"));
    console.log("Ingresó: ",n);
    while(s1 <= n){
        sumatoria = sumatoria + s1;
        s1++;
    }
    
    s2 = (n * (n + 1)/2);
    
    console.log("S1 = ", sumatoria);
    console.log("S2 = ", s2);
    
    if(sumatoria == s2){
        console.log("Son iguales.");
    }else{
        console.log("No son iguales.");
    }    