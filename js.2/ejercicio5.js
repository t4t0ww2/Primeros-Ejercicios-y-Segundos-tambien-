var tamaño_cuadrado = parseInt(prompt("Dame el tamaño"));
var cuadrado = new Array(tamaño_cuadrado);
let numeros = new Array(Math.pow(tamaño_cuadrado,2));
b = 0;
for(var i = 0; i < tamaño_cuadrado; i++){
	cuadrado [i]= new Array(tamaño_cuadrado);
	for(var j = 0; j < tamaño_cuadrado; j++){
		numeros[b] = parseInt(prompt("Dame los numeros de la fila"+(i+1)+":"));
		cuadrado [i][j] = numeros[b];
		b++;
	}
}
console.log(cuadrado);
let son_iguales = true;

//suma de filas
let suma_de_filas = new Array(tamaño_cuadrado);
for(i = 0; i < tamaño_cuadrado; i++){
	var suma = 0;
	for(j = 0; j < tamaño_cuadrado; j++){
		suma+=cuadrado[i][j];
	}
	suma_de_filas[i] = suma; 
}
console.log(suma_de_filas);

for(i = 1; i < tamaño_cuadrado; i++){
	if(suma_de_filas[0] != suma_de_filas[i]){
		son_iguales = false;
	}
}

//suma de columnas
let suma_de_columnas = new Array(tamaño_cuadrado);
for(j = 0; j < tamaño_cuadrado; j++){
	suma = 0;
	for(i = 0; i < tamaño_cuadrado; i++){
		suma+=cuadrado[i][j];
	}
	suma_de_columnas[j] = suma;
}
console.log(suma_de_columnas);

for(i = 1; i < tamaño_cuadrado; i++){
	if(suma_de_columnas[0] != suma_de_columnas[i]){
		son_iguales = false;
	}
}

//suma de diagonal frente atras
let diagonal_frente_atras = 0;
j = 0;
for(i = 0; i < tamaño_cuadrado; i++){
	diagonal_frente_atras = cuadrado[i][j] + diagonal_frente_atras;
	j++;
}

//suma de diagonal atras frente
let diagonal_atras_frente = 0;
j = tamaño_cuadrado;
for(i = 0; i < tamaño_cuadrado; i++){
	j--;
	diagonal_atras_frente = cuadrado[i][j] + diagonal_atras_frente;
}

if (diagonal_atras_frente != diagonal_frente_atras) {
	son_iguales = false;
}

//numeros consecutivos
if(son_iguales == true){
	console.log("Si es un cuadrado magico");
}else{
	console.log("No es un cuadrado magico");
}

numeros.sort();
let consecutivos = true;
for (b = 0; b < numeros.length - 1; b++) {
	if (numeros[b] + 1 != numeros[b+1]){
		consecutivos = false; 
		break;
	}
}
if(consecutivos == true){
	console.log("Tienen numeros consecutivos:");
}else{
	console.log("No tienen numeros consecutivos:");
}