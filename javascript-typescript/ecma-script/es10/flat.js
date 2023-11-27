let array = [1, [2, [3, [4]], 5]];
console.log(array.flat(2)); // [1, 2, 3, [4], 5]
console.log(array.flat(3)); // [1, 2, 3, [4], 5]
