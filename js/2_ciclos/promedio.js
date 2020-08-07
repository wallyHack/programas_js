

var usuario = prompt("Escribe tu nombre: \n");
var suma = 0;
for(var i=1; i<=10; i++){
    var calificacion = prompt("Escribe la calificación " + i);
    calificacion = parseInt(calificacion, 10);
    suma += calificacion;
}
console.log(suma);
var promedio = suma / 10;
console.log(usuario);
console.log(promedio);