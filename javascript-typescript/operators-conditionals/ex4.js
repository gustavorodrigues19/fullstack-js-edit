const prompt = require("prompt-sync")();

const inputX = prompt("Digite o valor em x ");
const inputY = prompt("Digite o valor em y ");

const x = parseFloat(inputX);
const y = parseFloat(inputY);

const squareArea = x * x;
const rectangleArea = x * y;
const triangleArea = (x * y) / 2;

if (squareArea > rectangleArea && squareArea > triangleArea) {
  console.log("Quadrado é o maior");
} else if (rectangleArea > squareArea && rectangleArea > triangleArea) {
  console.log("Retangulo é o maior");
} else {
  console.log("Triangulo é o maior");
}
