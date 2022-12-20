let a = 0, b = 0, c = 0;
a = prompt("dame el lado 1");
b = prompt("dame el lado 2");
c = prompt ("dame el lado 3");

if(a != b && a != c && b != c){
    console.log("es un triangulo escaleno");
}else if(a == b && a == c && c == b){
    console.log("triangulo equilatero");
}else if(a == b || a == c || b == c){
    console.log("triangulo isósceles");
}else if(a+b>c){
    console.log("triangulo invalidado");
}