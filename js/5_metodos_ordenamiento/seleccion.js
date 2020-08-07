
var numeros = new Array(10);
numeros[0] = 8;
numeros[1] = 5;
numeros[2] = 6; 
numeros[3] = 2;
numeros[4] = 11;
numeros[5] = 898;
numeros[6] = 77;
numeros[7] = 6758;
numeros[8] = 24;
numeros[9] = 4;

// algoritmo de ordenación por Selección
var n=10;
var temp=0;
var minimo=0;
for(var i=0; i<n-1; i++){
    minimo = i;
    for(var j=i+1; j<n; j++){
        if(numeros[minimo] > numeros[j]){
            minimo = j;
        }
    }
    if (minimo !== i) {
        temp = numeros[i];
        numeros[i] = numeros[minimo];
        numeros[minimo] = temp;
    }
}

// se muestra la lista de elementos ya ordenados
for(var i=0; i<10; i++){
    console.log(numeros[i]);
}