
// programa 1.- múltiplos de 3 comprendidos entre 1-90

document.open();
var numeros = new Array(30);

// obtengo todos los multiplos
for(var i=0; i<=30; i++){
    var multiplo = 3 * i;

    // lleno el arreglo desde la posicion 0, con los multiplos obtenidos
    numeros[i] = multiplo;
    if(numeros[i] > 0){
        document.write(numeros[i] + " ");
        //console.log(numeros[i]);
    }  
}
document.close();