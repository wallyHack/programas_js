
document.open();
document.write("<table align='center' border='2'>");
for(var i=0; i<10; i++){
    document.write("<tr>"); // 10 filas
    for(var j=1; j<=1; j++){
        document.write("<td>" + (i*j) + "</td>"); // 1 columna
    }
    document.write("</td>");
}
document.write("</table>");
