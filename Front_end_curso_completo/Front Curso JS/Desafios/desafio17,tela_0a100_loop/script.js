for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
        continue;
    }
    console.log("Valor de i é ", i);
    let x = parseInt(Math.random() * 100 + 1);
    console.log("Valor de x é ", x);
    if (i % x === 0) {
        break;
    }
    
}
