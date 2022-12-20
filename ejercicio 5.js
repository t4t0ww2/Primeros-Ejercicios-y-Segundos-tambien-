let edad = 0, estatura = 0, peso = 0, IMC = 0;
    edad = prompt("Hola dame tu edad:");
    estatura = prompt("Dame tu estatura en m:");
    peso = prompt("dame tu peso en Kg:");

    IMC = peso/estatura;

    if(edad < 45){
        if(IMC < 22.0){
            console.log("bajo");
        }else if(IMC >= 22.0){
            console.log("medio");
        }
    }else if(edad >= 45)
        if(IMC < 22.0){
            console.log("medio");
        }else if(IMC >= 22.0){
            alert("Alto");
        }