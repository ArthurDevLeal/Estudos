let n = parseFloat(5);
if (isNaN(n)) {
    document.write("So digita numeros");
} else {
    for (let i = 0; i <= 1000; i++) {
        document.write(n + " * " + i + " = " + n * i + "<br>");
        
    }
    
    document.write("Acabou o loop");
}

// if (isNaN(n)) {
//     document.write("So digite numeros");
// } else {
//     let contador = 0;
//     while (contador <= 1000) {
//         document.write(n + " * " + contador + " = " + n * contador + "<br>");
//         contador++;
//     }
//     document.write("A tabuada acabou");
// }
