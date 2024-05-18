let n = parseFloat(3);

if (isNaN(n)) {
    document.write("So digite numeros");
} else {
    let contador = 0;
    while (contador <= 1000) {
        document.write(n + " * " + contador + " = " + n * contador + "<br>");
        contador++;
    }
    document.write("A tabuada acabou");
}
