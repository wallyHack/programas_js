
// programa 4.- 

document.open();
var numeros_aleatorios = new Array(5);

// generamos los 50 numeros aleatorios
for(var i=0; i<=49; i++){
  //numero entero aleatorio entre 1000 y 10000
  var num_aleatorio = Math.round(Math.random() * (10000-1000) + 1000)
  numeros_aleatorios[i] = num_aleatorio; // llenamos el array
}

var mayor = numeros_aleatorios[0];
var menor = numeros_aleatorios[0];
// recorremos el array para obtener el mayor y menor
for(var j=0; j<=49; j++){
  document.write(numeros_aleatorios[j] + " ");
  if(numeros_aleatorios[j] > mayor){
    mayor =  numeros_aleatorios[j];
  }

  if(numeros_aleatorios[j] < menor){
    menor = numeros_aleatorios[j];
  }
}

document.write("<br>");
document.write("<br> Mayor:");
document.write(mayor);

document.write("<br>");
document.write("Menor:" + menor);
document.close();
