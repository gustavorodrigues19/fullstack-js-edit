let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

const { a, ...rest } = obj2;
console.log(rest);
