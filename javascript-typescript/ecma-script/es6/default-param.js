// New way
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

// Old way
function greetFunc(name) {
  if (!name) {
    name = "World";
  }
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, World!
greet("John"); // Hello, John!
