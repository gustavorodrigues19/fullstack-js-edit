let array = [1, 2, 3, 4, 5];
let newArray = array.flatMap((x) => [x, x * 2]);
console.log(newArray); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
