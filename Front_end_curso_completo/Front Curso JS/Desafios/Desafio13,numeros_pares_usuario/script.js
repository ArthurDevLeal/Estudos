let n = parseInt(5);
let i = 2;
if (isNaN(n)) {
    document.write("So digite numeros");
} else {
    do {
        console.log(i);
        i += 2;
    } while (i <= n);
}
