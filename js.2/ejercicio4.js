let arreglo = new Array(3);
//arreglo 1
var numero = 0;
for(var i = 0; i < 3; i++) {
	let arreglo2 = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		arreglo2 [j] = numero;
		numero++;
	}
	arreglo [i] = arreglo2
}
console.log(arreglo);

//arreglo 2
arreglo = new Array(3);
numero = 0;
let aumento = 1;
for(i = 0; i < 3; i++) {
	let arreglo2 = new Array(4);
	for(j = 0; j < 4; j++){
		arreglo2 [j] = numero;
		numero = aumento + numero;
		aumento += 2;
	}
	arreglo [i] = arreglo2;
}
console.log(arreglo);

//arreglo 3
arreglo = new Array(4);
for(i = 0; i < 4; i++){
	arreglo2 = new Array(3);
	numero = i;
	for(j = 0; j < 3; j++){
		arreglo2[j] = numero;
		numero+=4;
	}
	arreglo [i] = arreglo2;	
}
console.log(arreglo);
//arrelgo 4
arreglo = new Array(3);
numero = 0;
for(i = 0; i < 3; i++){
	arreglo2 = new Array(3);
	for(j = 0; j < 4; j++){
		if(j < 3){
			arreglo2[j] = numero;
			numero++;;
		}else{
			numero++;
		}
	}
	arreglo [i] = arreglo2;	
}
console.log(arreglo);
//arreglo 5
arreglo = new Array(4);
numero = 11.5;
for(i = 0; i < 4; i++){
	arreglo2 = new Array(3);
	for(j = 0; j < 3; j++){
		arreglo2[j] = numero;
		numero--;
	}
	arreglo [i] = arreglo2;	
}
console.log(arreglo);
//arreglo 6
arreglo = new Array(3);
numero = 0;
for(var i = 0; i < 3; i++) {
	let arreglo2 = new Array(4);
	let columna = 100;
	for (var j = 0; j < 4 ; j++) {
		arreglo2 [j] = numero + columna;
		numero++;
		columna += 100;

	}
	arreglo [i] = arreglo2
}
console.log(arreglo);

//arreglo 7
arreglo = new Array(3);
numero = 0;
var fila = 100;
for(var i = 0; i < 3; i++) {
	let arreglo2 = new Array(4);
	for (var j = 0; j < 4 ; j++) {
		arreglo2 [j] = numero + fila;
		numero++;
	}
	fila += 100;
	arreglo [i] = arreglo2
}
console.log(arreglo);