const print = (msg) => msg ?? "No message";
const invokeOtherFunction = (fn) => fn("Hello World!");

// function print(msg) {
//   if (msg) return msg;
//   return "No message";
// }

// function invokeOtherFunction(fn) {
//   return fn("Hello World!");
// }

console.log(invokeOtherFunction(print));
