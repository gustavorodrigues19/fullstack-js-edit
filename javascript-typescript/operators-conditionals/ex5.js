const prompt = require("prompt-sync")();

const numInput = prompt("Digite o valor em x ");

const num = parseInt(numInput, 10);

if (num % 2 === 1) {
  console.log("Impar");
} else {
  console.log("Par");
}
