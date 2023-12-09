// ex1
const calcSum = (a: number, b: number): number => a + b;

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

const car: {
  model: string;
  year: number;
  brand: string;
} = {
  model: "bmw x3",
  year: 1999,
  brand: "bmw",
};
