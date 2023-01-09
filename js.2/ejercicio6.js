let equipos = new Array(8);
let pares_equipos = new Array(4);

for(var b = 0; b < equipos.length; b++){
	equipos[b] = prompt("Ingresa al equipo "+(b+1)+":");
	console.log("Equipo "+(b+1)+":",equipos[b]);
}

b = 0;
for(var i = 0; i < pares_equipos.length; i++){
	var equipo = new Array(2);
	for(var j = 0; j < equipo.length; j++){
		equipo[j] = equipos[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos pasados:",pares_equipos);

alert("Cuartos");
i = 0;
var pasados = new Array(4);
for(b = 0; b < equipos.length; b+=2){
	let seleccion = prompt("a.-"+equipos[b]+" - b.-"+equipos[b+1]);
	if(seleccion == "a"){
		pasados [i] = equipos[b];
		
	}else if(seleccion == "b"){;
	 	ganador = equipos [b+1];
	 	pasados [i] = ganador;
	}
	i++;
}

b = 0; 
pares_equipos = new Array(2);
for(i = 0; i < pares_equipos.length; i++){	
	equipo = new Array(2);
	for(j = 0; j < equipo.length; j++){
		equipo[j] = pasados[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos pasados:",pares_equipos);

alert("semifinal");

i = 0;
var pasados2 = new Array(2);
for(b = 0; b < pasados.length; b+=2){
	let seleccion = prompt("a.-"+pasados[b]+" - b.-"+pasados[b + 1]);
	if(seleccion == "a"){
		pasados2 [i] = pasados[b];
		
	}else if(seleccion == "b"){;
	 	ganador = pasados[b+1];
	 	pasados2 [i] = ganador;
	}
	i++;
}

b = 0; 
pares_equipos = new Array(1);
for(i = 0; i < pares_equipos.length; i++){	
	equipo = new Array(2);
	for(j = 0; j < equipo.length; j++){
		equipo[j] = pasados2[b];
		b++;
	}
	pares_equipos[i] = equipo;
}
console.log("Equipos pasados:",pares_equipos);

alert("final");

i = 0;
var ganador; 
for(b = 0; b < pasados2.length; b+=2){
	let seleccion = prompt("a.-"+pasados2[b]+" - b.-"+pasados2[b+1]);
	if(seleccion == "a"){
		ganador = pasados2[b];
	}else if(seleccion == "b"){;
	 	ganador = pasados2[b+1];
	}
	i++;
}


console.log("El ganador es nada mas y nada menos que :",ganador);