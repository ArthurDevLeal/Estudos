let n = parseFloat(5);
if (isNaN(n)) {
    document.write("So digita numeros");
} else {
    for (let i = 0; i <= 1000; i++) {
        document.write(n + " * " + i + " = " + n * i + "<br>");
        if (i % 10 == 0 && i !== 0) {
            document.write("<hr>");
        }
    }
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
