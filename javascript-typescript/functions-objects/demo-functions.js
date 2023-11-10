// const z = 10;

// function sum(x, y) {
//   return x + y + z;
// }

// Explain function arguments
// How to invoke a function?
// const result = sum(1, 2);

// short return
// console.log(sum(1, 2));
// Arrow vs normal functions https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
// Arrow functions, explain short return
// Functional programming
const sum = (x, y) => x + y;
// What is return inside a function? Is necessary?
const print = (msg) => {
  console.log(msg ?? "Hello world");
};
print("Hello world");

// Early return

const getCartItems = (items) => {
  if (items.length === 0) {
    return [];
  }

  print("executa código");
};

console.log(getCartItems(["item1", "item2"]));
// What I can return inside a function?
// Conditionals

const dbUsers = ["user1", "user2", "user3"];

const findUserByName = (name) => {
  const user = dbUsers.find((user) => user === name);

  if (user) {
    return user;
  }

  print();

  return null;
};

console.log(findUserByName("user4"));
