const prompt = require("prompt-sync")();

const inputX = prompt("Digite o valor em x ");
const inputY = prompt("Digite o valor em y ");

const x = parseFloat(inputX);
const y = parseFloat(inputY);

console.log("soma: " + (x + y));
console.log("subtração: " + (x - y));
console.log("multiplicação: " + x * y);
console.log("divisão: " + x / y);
