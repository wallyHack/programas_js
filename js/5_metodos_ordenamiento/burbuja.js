
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

// algoritmo de ordenacion por Burbuja
var aux;
var n=10;
for(var i=0; i<=n; i++){
    for(var j=0; j<n-1; j++){
        if(numeros[j] > numeros[j+1]){
            aux = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = aux;
        }
    }
}

// se muestra a lista de numeros ordenados
document.open();
document.write("<table align='center' border='2'>");
for(var i=0; i<10; i++){
    document.write("<tr>"); // 10 filas
    for(var j=1; j<=1; j++){
        document.write("<td>" + numeros[i] + "</td>"); // 1 columna
    }
    document.write("</td>");

    // console.log(numeros[i]);
}
document.write("</table>");
document.close();