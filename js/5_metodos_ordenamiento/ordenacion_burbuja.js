
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
document.write("<h3>Método de ordenación Burbuja</h3>");
document.write("<table align='left' border='2'>");
for(var i=0; i<1000; i++){
    document.write("<tr>"); // 1000 filas
    for(var j=1; j<=1; j++){
        document.write("<td>" + numeros[i] + "</td>"); // 1 columna
    }
    document.write("</td>");
}
document.write("</table>");

// ordenamos los elementos del array con el método de la burbuja
var aux;
var n=1000;
for(var i=0; i<=n; i++){
    for(var j=0; j<n-1; j++){
        if(numeros[j] > numeros[j+1]){
            aux = numeros[j];
            numeros[j] = numeros[j+1];
            numeros[j+1] = aux;
        }
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