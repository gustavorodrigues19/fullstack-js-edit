const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
  start: function () {
    console.log(`Starting ${this.brand} ${this.model} - ${this.year}`);
  },
};

console.log(car.brand);
console.log(car["brand"]);
