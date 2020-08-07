
// leemos la entrada del usuario
var palabra = prompt("Escribe una palabra?");
var cadena_original = palabra.toLowerCase();

// invertimos el orden de la cadena
var cadena_nueva = "";
for(var i=cadena_original.length-1; i>=0; i--){
    cadena_nueva += cadena_original[i];
}

// comparamos las posiciones para saber si es palindromo
var iguales = true;
for(var i=0; i<cadena_original.length-1; i++){
    if(cadena_original[i] == cadena_nueva[i]){
        iguales = true;        
    }else{
        iguales = false;
    }
}

document.open();
var mensaje = "";
if(iguales == true){
    mensaje = "Si es palindromo: " + cadena_original;
    console.log(mensaje);
    document.write(mensaje);
}else{
    mensaje = "No es palindromo: " + cadena_original;
    console.log(mensaje);
    document.write(mensaje);
}
document.close();

// hacemos las pruebas con radar, seres, solos, reconocer, sometemos, arenera, y rallar.