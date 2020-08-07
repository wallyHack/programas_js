
document.open();
// creamos un array con tamaño de 1000
var numeros = new Array(1000);

// llenamos el array con numeros aleatorios de rango 0-10000
for(var i=0; i<1000; i++){
    //numero entero aleatorio entre 0 y 10000
    var num_aleatorio = Math.round(Math.random() * (10000-0) + 0)
    numeros[i] = num_aleatorio;    
}

// se muestran los elementos en forma de tabla ...
document.open();
document.write("<h3>Método de ordenación por Selección</h3>");
document.write("<table align='left' border='2'>");
for(var i=0; i<1000; i++){
    document.write("<tr>"); // 1000 filas
    for(var j=1; j<=1; j++){
        document.write("<td>" + numeros[i] + "</td>"); // 1 columna
    }
    document.write("</td>");
}
document.write("</table>");

// ordenamos los elementos del array con el método de Selección
var n=1000;
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

// se muestran los elementos en forma de tabla ...
// de forma ascendente ...
document.write("<table align='center' border='2'>");
for(var i=0; i<1000; i++){
    document.write("<tr>"); // 1000 filas
    for(var j=1; j<=1; j++){
        document.write("<td>" + numeros[i] + "</td>"); // 1 columna
    }
    document.write("</td>");
}
document.write("</table>");
document.close();