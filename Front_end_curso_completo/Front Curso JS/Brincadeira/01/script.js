let temp = prompt("Me fale um numero");
temp = parseFloat(temp);
let fahren = 1.8 * temp + 32;
let kelvin = temp + 273.15;
console.log(temp + (" Graus equivale a " + fahren + " Fahrenheit e a " + kelvin + " Kelvin"));
