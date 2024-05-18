let dado1 = parseInt(Math.random() * 6 + 1);
let dado2 = parseInt(Math.random() * 6 + 1);
let i = 1;
while (dado1 !== dado2) {
    i++;
    console.log(dado1, dado2);
    dado1 = parseInt(Math.random() * 6 + 1);
    dado2 = parseInt(Math.random() * 6 + 1);
}
console.log("A quantidade de vezes que foi jogado os dados foi: " + i + " e o numero que caiu foi " + dado1 + " e " + dado2);

console.log("--------------------------");

dado1 = parseInt(Math.random() * 6 + 1);
dado2 = parseInt(Math.random() * 6 + 1);
i = 1;
do {
    i++;
    console.log(dado1, dado2);
    dado1 = parseInt(Math.random() * 6 + 1);
    dado2 = parseInt(Math.random() * 6 + 1);
} while (dado1 !== dado2);
console.log("A quantidade de vezes que foi jogado os dados foi: " + i + " e o numero que caiu foi " + dado1 + " e " + dado2);
