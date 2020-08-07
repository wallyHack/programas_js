
document.open();
var nombres = new Array(5);
 
// ciclo para llenar el array
for(var i=0; i<=4; i++){
    nombres[i] = prompt("Nombre del compañero " + i + ":") 
}

// ciclo para mostrar el array
for(var j=4; j>=0; j--){
    document.write(nombres[j] + "<br>");
}
document.close();
