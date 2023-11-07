const prompt = require("prompt-sync")();

const numInput = prompt("Digite o valor em x ");

const num = parseInt(numInput, 10);

num % 2 === 1 ? console.log("Impar") : console.log("Par");
