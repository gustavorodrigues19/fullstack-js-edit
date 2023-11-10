// const sum = (x, y) => x + y;

// const calc = (x, y, sum) => {
//   return sum(x, y);
// };

function sum(x, y) {
  return x + y;
}

function calc(x, y, sum) {
  return sum(x, y);
}

console.log(calc(1, 2, sum));
