var columna = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var fila = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var cordenada_x = 0, izquierda = 0, derecha = 0;
    var arriba_en_derecha = 0, abajo_en_derecha = 0, arriba_en_izquierda = 0, abajo_en_izquierda = 0;
    var cordenada_y = 0, arriba = 0, abajo = 0;
    var derecha_en_arriba = 0, izquierda_en_arriba = 0, derecha_en_abajo = 0, izquierda_en_abajo = 0;
    let numero_de_posiciones = 0;
    
    cordenada_x = parseInt(prompt("Dame la fila:"));
    cordenada_y = parseInt(prompt("Dame la columna:"));
    
    console.log("fila: ", fila[cordenada_x] );
    console.log("columna: ", columna[cordenada_y] );
    if((cordenada_x <= 0 || cordenada_y <= 0) || (cordenada_x > 8 || cordenada_y > 8)){
        alert("no es valido")
    }else
            //posicion de x
        if ( cordenada_x+2 > 8 ){}else{
        derecha = cordenada_x + 2;
        //posicion de y sobre x
        if (cordenada_y+1 > 8 ){}else{
            arriba_en_derecha = cordenada_y + 1;
            console.log("Posisicón:", fila[derecha], columna[arriba_en_derecha]);
            numero_de_posiciones++;
        }
        //posicion de x sobre y
        if ( cordenada_y-1 < 0 ){}else{
            abajo_en_derecha = cordenada_y - 1;
            console.log("Posisción:", fila[derecha], columna[abajo_en_derecha]);
            numero_de_posiciones++;
        }
        }
        if ( cordenada_x-2 < 0 ){}else{
        izquierda = cordenada_x - 2;
        //posicion de y sobre x
        if (cordenada_y+1 > 8 ){}else{
            arriba_en_izquierda = cordenada_y + 1;
            console.log("Posisicón:", fila[izquierda], columna[arriba_en_izquierda]);
            numero_de_posiciones++;
            
        }
        //posicion de x sobre y
        if ( cordenada_y-1 < 0 ){}else{
            abajo_en_izquierda = cordenada_y - 1;
            console.log("Posisción:", fila[izquierda], columna[abajo_en_izquierda]);
            numero_de_posiciones++;
        }
        }
        // posicion de y
        if ( cordenada_y+2 > 8 ){}else{
        arriba = cordenada_y + 2;
        //posicion de y arriba a la derecha de x
        if (cordenada_x+1 > 8 ){}else{
            derecha_en_arriba = cordenada_x + 1;
            console.log("Posisicón:", fila[arriba],columna[derecha_en_arriba]);
            numero_de_posiciones++;
        }
        //posiciones de y arriba a la izquierda de x
        if ( cordenada_x-1 < 0 ){}else{
            izquierda_en_arriba = cordenada_x - 1;
            console.log("Posisción:", fila[arriba],columna[izquierda_en_arriba]);
            numero_de_posiciones++;
        }
        }
        if ( cordenada_y-2 < 0 ){}else
        abajo = cordenada_y - 2;
        //posicion de y abajo a la derecha de x
        if (cordenada_x+1 > 8 ){}else{
            derecha_en_abajo = cordenada_x + 1;
            console.log("Posisicón:", fila[abajo],columna[derecha_en_abajo]);
            numero_de_posiciones++;
        }
        //posiciones de y abajo a la izquierda de x
        if ( cordenada_x-1 < 0 ){}else{
            izquierda_en_abajo = cordenada_x - 1;
            console.log("Posisción:", fila[abajo],columna[izquierda_en_abajo]);
            numero_de_posiciones++;
        }