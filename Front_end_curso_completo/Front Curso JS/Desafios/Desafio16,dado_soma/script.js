let count = 0;
let count_pair = 0;
while (true) {
    let dado1 = parseInt(Math.random() * 6 + 1);
    let dado2 = parseInt(Math.random() * 6 + 1);
    console.log(dado1, dado2, count, count_pair);
    if( dado1 === dado2){
        continue
    }
    count++;

    if ((dado1 + dado2) % 2 === 0) {
        count_pair++;
    }
    if (count === 10) {
        break;
    }
}
console.log("Os dados foram jogados " + count + " vezes")
