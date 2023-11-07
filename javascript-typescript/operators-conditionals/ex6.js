const prompt = require("prompt-sync")();

const KM = parseFloat(prompt("Digite um valor em KM: "));

const milhasConvertidas = (KM / 1.609).toFixed(2);

console.log("O valor de: " + KM + " em milhas é: " + milhasConvertidas);
