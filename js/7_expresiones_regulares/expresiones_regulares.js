
    document.open();
    var frase = prompt("Ingresa una frase: \n");        
    console.log(frase);
    document.write(frase);
    // expresión que busca las consonantes de forma global(Repetida); y sin importar mayúsculas y minúsculas
    var exp_reg_consonantes = /[^AEIOU]/ig;
    var consonantes = frase.match(exp_reg_consonantes); // devuelve un array
    var salida_consonantes = "";
    for(var i = 0; i<consonantes.length; i++){
        salida_consonantes += consonantes[i];
        // console.log(consonantes[i]);
    }
    document.write("<br>");
    console.log(salida_consonantes);
    document.write(salida_consonantes);

    // expresión que busca las vocales de forma global(Repetida); y sin importar mayúsculas y minúsculas
    var exp_reg_vocales = /[AEIOU]/ig;
    var vocales = frase.match(exp_reg_vocales);

    var salida_vocales = "";
    for(j = 0; j<vocales.length; j++){
        salida_vocales += vocales[j];
        // console.log(vocales[j]);
    }
    document.write("<br>");
    console.log(salida_vocales);
    document.write(salida_vocales);
    document.close();
