let array = [1, 2, 3, 4, 5];

console.log(array.includes(2)); // true
console.log(array.includes(6)); // false

// Você também pode especificar um segundo argumento para indicar onde começar a busca
console.log(array.includes(2, 3)); // false
