let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

// old way
let arr3 = [];
arr1.forEach((item) => {
  arr3.push(item);
});
console.log(arr3); // [1, 2, 3]
