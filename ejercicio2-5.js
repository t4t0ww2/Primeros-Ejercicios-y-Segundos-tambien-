let numero, caracteres;
  numero = parseInt(prompt("Dame un numero:"));
  
  caracteres = numero.toString() 
  
  if(caracteres.match(/^[0-9]+$/)){
    console.log(caracteres.length);
  }else{
    console.log("No es un numero entero");
  }  