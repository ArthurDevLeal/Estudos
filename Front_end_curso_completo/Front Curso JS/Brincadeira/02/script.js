let n1 = parseFloat(2);
let n2 = parseFloat(5);

if (isNaN(n1) || isNaN(n2)) {
    console.log("Escreva somente numeros");
} else if (n1 == n2) {
    console.log("Os numeros nao podem ser iguais, reescreva-os");
} else {
    if (n1 > n2) {
        console.log(n1 + " È maior que " + n2);
    } else {
        console.log(n1 + " É menor que " + n2);
    }
}
