// module.js
const hello = "Hello, world!";
export default hello;

// main.js
import { hello } from "./module.js";
console.log(hello); // Hello, world!

const test = "test";

module.exports = test;
const test = require("./module.js");
