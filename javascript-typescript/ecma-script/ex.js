"use strict";
// #1
function greet(name) {
  return "Hello, " + name + "!";
}

const greeting = (name) => {
  return `Hello, ${name}!`;
};

// console.log(greeting("World"));

// #2
function fetchData() {
  fetch("https://random-data-api.com/api/v2/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const fetchDataAsync = async () => {
  try {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// #3
const user = {
  name: "John",
  address: {
    street: "123 Main St",
  },
};

const { lastName, age } = user;
console.log(lastName); // This will throw a type error because 'lastName' is undefined in the 'user' object.
