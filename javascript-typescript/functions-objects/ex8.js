const prompt = require("prompt-sync")();

const ownerName = prompt("Digite o nome do proprietario do carro");
const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
  ownerName,
  start: function () {
    console.log(`Starting ${this.brand} ${this.model} - ${this.year}`);
  },
};
car.plate = "AAA-1111";

console.log(car);
