
document.open();
for(var i=1; i<=9; i++){    
    for(var j=1; j<=9; j++){
        if(i==j){
            for(var k=i; k<=9; k++){
                document.write(j);
            }

        }
    }
    document.write("<br>");
}
document.close();


// document.open();
// for(var i=1; i<=9; i++){    
//     for(var j=1; j<=9; j++){
//         if(i==j){
//             for(var k=9; k>=1; k--){
//                 document.write(i);
//             }

//         }
//     }
//     document.write("<br>");
// }
// document.close();