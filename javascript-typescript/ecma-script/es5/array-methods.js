const arr = [1, 2, 3, 4, 5];
const squares = arr.map(function (x) {
  return x * x;
});
console.log(squares); // [1, 4, 9, 16, 25]

const someReturn = arr.some((item) => item === 6);
console.log("some", someReturn);

const everyReturn = arr.every((item) => item === 2);
console.log("every", everyReturn);

const findReturn = arr.find((item) => item === 2);
console.log("find", findReturn);

const filterReturn = arr.filter((item) => item % 2 === 0);
console.log("filter", filterReturn);
