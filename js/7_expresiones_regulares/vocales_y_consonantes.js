
var frase = promp("Introduce un frase:");
console.log(frase);

// obtenemos las consonantes
var consonantes = "";
for(var i = 0; i<frase.length; i++){
    if(frase[i] !== "A" & frase[i] !== "E" & frase[i] !== "I" & frase[i] !== "O" & frase[i] !== "U"){        
        consonantes += frase[i];           
    }     
}
console.log(consonantes);

// obtenemos las vocales
var vocales = "";
for(var i = 0; i<frase.length; i++){
    if(frase[i] == "A"){
        vocales += frase[i];
    }else if(frase[i] == "E"){
        vocales += frase[i];
    }else if(frase[i] == "I"){
        vocales += frase[i];   
    }else if(frase[i] == "O"){
        vocales += frase[i];
    }else if(frase[i] == "U"){
        vocales += frase[i];
    }
}
console.log(vocales);