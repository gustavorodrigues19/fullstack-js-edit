// ex1
const calcSum = (a: number, b: number): number => a + b;
// function calcSum2(a: number, b: number): number {
//   return a + b;
// }

console.log(calcSum(1, 2));

// ex2
const getSign = (num: number): string => {
  if (num > 0) {
    return "positive";
  }
  if (num < 0) {
    return "negative";
  }
  return "zero";
};
console.log(getSign(1));

// ex3
type CarType = {
  model: string;
  year: number;
  brand: string;
};

interface CarTypeInterface {
  model: string;
  year: number;
  brand: string;
}

type cartType = {
  brand: string;
  model: string;
  year: number;
  toString(): string;
};

const car: cartType = {
  brand: "bmw",
  model: "x3",
  year: 1999,
  toString(): string {
    return `${this.brand} ${this.model} ${this.year}`;
  },
};

console.log(car.toString());

// ex4
const fetchData = async () => {
  const resp = await fetch("https://random-data-api.com/api/v2/users?size=2");
  const content = await resp.json();
  console.log(content);
};

fetchData();

// ex5
let isDone: boolean = true;
// isDone = "string";

// ex6
const person = {
  firstName: "Gustavo",
  lastName: "Rodrigues",
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};
