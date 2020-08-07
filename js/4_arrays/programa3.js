
// programa 3.-

document.open();
var numeros_aleatorios = new Array(50);
var suma_aleatorios = 0

//generamos 50 numeros aleatorios
for(var i=0; i<=49; i++){
    //numero entero aleatorio entre 50 y 100
    var num_aleatorio = Math.round(Math.random() * (100-50) + 50)
    numeros_aleatorios[i] = num_aleatorio;
}

// array de numeros aleatorios
for(var j=0; j<=49; j++){
    if(numeros_aleatorios[j] < 60){
        suma_aleatorios ++;
    }
    document.write(numeros_aleatorios[j] + " ");
}
document.write("<br>");
document.write("Aleatorios menores a 60: " + suma_aleatorios);
document.close();