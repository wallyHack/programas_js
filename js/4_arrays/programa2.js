

// programa 2.- 
document.open();

// array de pares

var numeros_pares = new Array(25);
for(var i=0; i<=24; i++){
  for(var j=1; j<=50; j++){
    if(j % 2 == 0){
       numeros_pares[i] = j;       
       document.write(numeros_pares[i] + " ");      
     }
  }
  break;
}

document.write("<br>");

// array de impares

var numeros_impares = new Array(25);
for(var i=0; i<=24; i++){
  for(var j=1; j<=50; j++){
    if(j % 2 == 1){
      	numeros_impares[i] = j;
        document.write(numeros_impares[i] + " ");  
     }
  }
  break;
}
document.close();