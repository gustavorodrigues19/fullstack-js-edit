const prompt = require("prompt-sync")();

const inputX = prompt("Digite o valor de x");
const inputY = prompt("Digite o valor de y");

const x = parseInt(inputX, 10);
const y = parseInt(inputY, 10);

switch (weekDay) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.log("Operador inválido");
    break;
}
