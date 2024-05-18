for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}
console.log("FIM DO LOOP COM BREAK");
for (i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
console.log("FIM DO LOOP COM CONTINUE");
