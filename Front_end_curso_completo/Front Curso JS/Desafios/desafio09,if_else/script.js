let n1 = parseFloat(5);
let n2 = parseFloat(4);

if (isNaN(n1) || isNaN(n2)) {
    console.log("Digite apenas numeros");
} else if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0) {
    console.log("Digite apenas numeros entre 0 e 10");
} else {
    let media = (n1 + n2) / 2;
    if (media > 4 && n1 != 0 && n2 != 0) {
        console.log("Está passado");
    } else {
        console.log("Está Reprovado");
    }
}
