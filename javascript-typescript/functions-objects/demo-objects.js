const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Access properties from object person
console.log(person.firstName);
// If a property is undefined, what should I do?
console.log(person.age);
// How to invoke a function inside object?
console.log(person.fullName());
// How to interact over properties?
Object.keys(person).forEach((key) => {
  console.log(key);
  console.log(person[key]);
});
// How to interact over values?
Object.values(person).forEach((value) => {
  console.log(value);
});

const getProducts = () => [
  { name: "Apple", type: "fruit", price: 2, getDiscount: () => 0.1 },
  { name: "Tomato", type: "vegetable", price: 3 },
  { name: "Orange", type: "fruit", price: 1 },
  { name: "Cucumber", type: "vegetable", price: 2 },
];

const products = getProducts();
products.forEach((product) => {
  const { name } = product;
  // const name = product.name
  console.log(name);
  console.log(product.type);
  console.log(product.price);
  console.log(product?.getDiscount?.());
});

// const product1 = products[0];
// const product2 = products[1];
const [product1, product2] = products;
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
