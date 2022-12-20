var numero, reversa, reversa_numero, numero2, cantidad;
    var multiplos = 2, suma = 0, multi = 0;
    var modulo = 0, resta = 0;
    numero = parseInt(prompt("ingresa un numerooo:"));
    
    if(numero.toString().match(/^[0-9]+$/)){
        reversa = numero.toString().split("").reverse().join(",");
        cantidad = numero.toString().length;
        reversa_numero = reversa.split(',').map(Number);
        
        for (let i = 0; i < cantidad ; i++) {
            console.log(reversa_numero[i]);  
        
            if (multiplos <= 7){
                multi = multiplos * reversa_numero[i];
                console.log("multiplos",multiplos ,"x", reversa_numero[i]," = ", multi);
            }else{
                multiplos = 2;
                multi = multiplos * reversa_numero[i];
                console.log("multiplos",multiplos ,"x", reversa_numero[i]," = ", multi);
            }
            multiplos++;
            suma = suma + multi;
        }
        
        console.log("suma: ",suma);
        
        modulo = suma%11;
        console.log("Modulo:", modulo);
        
        resta = 11 - modulo;
        console.log("Resta:", resta);
        
        console.log(numero.toString()+"-"+resta.toString());
    }else
        alert("no son digitos validos");