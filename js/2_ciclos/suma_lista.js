
var numero = parseInt(prompt("Escribe un número entre 20 y 50"));
var suma = 0;
for(var i=1; i<=numero; i++){
    suma += i;
    console.log(i);
}
console.log("Suma: " + suma);