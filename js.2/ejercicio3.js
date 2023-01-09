var a = new Array(3);
var b = new Array(3);
var multi_array = new Array();

for(var i = 0; i < 3; i++){
    let Datos_A = parseInt(prompt("Dame los datos de A"));
    a[i] = Datos_A;    
}
console.log("a:",a);

for(i = 0; i < 3; i++){
    let Datos_B = parseInt(prompt("Dame los datos de B"));
    b[i] = Datos_B;
}
console.log("b:",b); 

let suma = 0, multi = 0;
for(i = 0; i < 3; i++){
    multi = (a[i]*b[i]);
    suma += multi;
}
console.log("producto interno entre a y b:",suma);

if (suma != 0) {
    console.log("a y b son ortagonales");
}else{
    console.log("a y b no son ortagonales");
}