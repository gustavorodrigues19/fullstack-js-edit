const arr = [1, 5, 2, 4, 3];

// let max = arr[0];
// let min = arr[0];
// arr.forEach((item) => {
//   if (item > max) {
//     max = item;
//   }
//   if (item < min) {
//     min = item;
//   }
// });

// const arrSorted = arr.sort();
// const min = arrSorted[0];
// const max = arrSorted.pop();

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log("max", max);
console.log("min", min);
