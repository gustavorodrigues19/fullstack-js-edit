const prompt = require("prompt-sync")();

const inputCelsius = prompt("Digite o valor em celsius ");

const celsius = parseFloat(inputCelsius);

const fahrenheit = celsius * 1.8 + 32;

console.log("O valor em fahrenheit é " + fahrenheit.toFixed(2));
