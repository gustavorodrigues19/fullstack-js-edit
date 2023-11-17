const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
  colors: {
    green: {
      test: "asmfsamfma",
    },
    red: "#aaaa",
  },
  getCarName: function () {
    console.log("car name");
  },
};

console.log("keys:");
Object.keys(car).forEach((key) => console.log(key));

console.log("----------------------");

console.log("values:");
Object.values(car).forEach((key) => console.log(key));

/// Destructuring and assignment
const { brand } = car;
const {
  colors: {
    green: { test },
  },
} = car;
// const brand = car.brand;
console.log("test", test);
car.getCarName();
