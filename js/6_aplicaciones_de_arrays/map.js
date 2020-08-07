
// relaciónes clave-valor
var miMapa = new Map();
miMapa.set("O", "0");
miMapa.set("I", "1");
miMapa.set("Z", "2");
miMapa.set("E", "3");
miMapa.set("A", "4");
miMapa.set("S", "5");
miMapa.set("G", "6");
miMapa.set("B", "8");

// leemos la entrada del usuario
var frase = prompt("Escribe una frase en mayúsculas: ?");
var parte_cifrada = "";
var parte_no_cifrada = "";

// recorremos la cadena
for(var i=0; i<frase.length; i++){
	
    // recorremos las claves y valores
    for (var [clave, valor] of miMapa) {
        // obtenemos la parte cifrada
        if(frase[i] == clave){
            parte_cifrada += valor;            
            // sobreescribimos la frase original para que en ese indice ponga el valor de la clave encontrada
            // frase[i] = valor;
                     
        }   
    }

    // obtenemos la parte no cifrada
    if(frase[i] !== "O" & frase[i] !== "I" & frase[i] !== "Z" & frase[i] !== "E" & frase[i] !== "A" & frase[i] !== "S"
        & frase[i] !== "G" & frase[i] !== "O"){
        parte_no_cifrada += frase[i];
        
    }    
    // if(i>1){
    //     break;
    // }
}

console.log(parte_cifrada);
console.log(parte_no_cifrada);
// console.log(frase);






