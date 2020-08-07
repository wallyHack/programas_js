

for(var i=100; i>=1; i--){                                    
  for(var j=0; j<=99; j++){
    console.log(i-j + " - " + j + " = " + ((i-j)-j));
    if(i-j == 50){
      break;
    }
  }
  break;
}