const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
  start: function () {
    console.log(`Starting ${this.brand} ${this.model} - ${this.year}`);
  },
};
car.plate = "AAA-1111";

console.log(car);
