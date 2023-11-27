let array = [1, 2, 3, 4, 5];

console.log(array.includes(2)); // true
console.log(array.includes(6)); // false

// Você também pode especificar um segundo argumento para indicar onde começar a busca
console.log(array.includes(2, 3)); // false

const test1 = "test1";
const test2 = "test2";

if (test1 === "test1" || test2 === "test2") {
  console.log("test1 or test2");
}

if ([test1, test2].includes("test1")) {
  console.log("test1 or test2");
}
