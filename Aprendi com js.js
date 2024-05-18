let nome = prompt("Qual seu nome");
//Serve para criar 1 variavel (Tabem pode utilizar o var, porem nao e mt utilizado)
const nome2 = promp("Me fale um numero constate");
//Serve para criar 1 constate inalteravel
prompt("Pergunta do navegador");
//Serve para mandar uma pergunta pelo navegador
alert("Mensagem do Navegador");
//Serve para mandar uma mensagem pelo navegador
let n1 = "1";
parseFloat(n1);
//Transforma o resultado de uma variavel em um numero decimal
let n2 = "2";
parseInt(n2);
toString(n3);
Boolean(n4);
//Transforma o resultado de uma variavel em um numero inteiro
let n3 = parseInt("3");
let n4 = parseFloat("4");
//Forma reduzida de como utilizar
//! Operadores de atribuicao e aritimetico !//
//? x++ soma depois da operacao x++, x-- soma antes da operacao x--, ++x, --x
console.log("Mostra algo no console");
//Mostra algo no console
typeof 0;
typeof "0";
typeof toString(0);
typeof Boolean(0);
// Detecta o tipo da mensagem
5 == 5;
//Igualdade apenas do valor
5 === 5;
//Igualdade do valor e tipo
5 != 5;
//Diferenca do valor
5 !== 5;
//Diferaca do valor e tipo
5 < 5;
//Menor que
5 <= 5;
//Menor ou igual
5 > 5;
//Maior que
5 >= 5;
//Maior ou igual
5 > 5 && 3 > 2 
// 5 maior que 5 "e" 3 maior que 2
5 > 5 || 3 > 2 
// 5 maior que 5 "ou" 3 maior que 2
true = true // . !true = false, !!true = true
isNaN(5)
//Chega se é um not a number, ou seja checa se nao é um number
if (condition) {
    
} else {
    
}
//Se isso for true faz isso, senao faz aquilo
switch (n) {
    case "0":
        console.log("Domingo");
        break;
    case "1":
        console.log("Segunda feira");
        break;
    case "2":
        console.log("Terca feira");
        break;
    case "3":
        console.log("Quarta feira");
        break;
    case "4":
        console.log("Quinta feira");
        break;
    case "5":
        console.log("Sexta feira");
        break;
    case "6":
        console.log("Sabado feira");
        break;
    default:
        console.log("Digite somente numeros entre 0 e 6");
}
//Switch so analisa valor e tipo,somente igualdade, e lembrar do break
let contador = 0;
    while (contador <= 1000) {
        document.write(n + " * " + contador + " = " + n * contador + "<br>");
        contador++;
    }
    // um loop utilizando o while, enquanto o contador for menor ou igual a mil, digite a linha de comando e dps some mais um a contador e repita ate chegar a 1000, utilizado quando nao sabemos quantas vezes ira rodar
do {
    i++;
    console.log(dado1, dado2);
    dado1 = parseInt(Math.random() * 6 + 1);
    dado2 = parseInt(Math.random() * 6 + 1);
} while (dado1 !== dado2);
// mesma coisa do while, porem roda 1 vez independente doque aconteca
for (let i = 0; i <= 1000; i++) {
    document.write(n + " * " + i + " = " + n * i + "<br>");
}
document.write("Acabou o loop");
// um loop utilizando o for, declara a variavel, depois enquanto i <= 1000 soma mais 1 ao i e repete o codigo, quando for maior acaba o loop, utilizado quando sabemos quantas vezes ira rodar
parseInt(Math.random() * 6 + 1)
//Gera um numero random entre 1 e 6 por conta do * 6 e +1
let numeros = [0,1,2,3,4,5,6]
//Cria uma lista de numeros, chamada de array
numeros.length
//Metodo para ver tamanho de algo
numeros.push(1,2,3,4,banana,pe,"ovo")
// Metodo para inserir algo no final de uma array
let titulo = document.getElementById("titulo")
titulo.textContent = "banana"
// ve oque é o titulo e dps muda o elemento do titulo
user.value
// Recupera ou define valores especialmente em campos de formulario
aba.textContent();