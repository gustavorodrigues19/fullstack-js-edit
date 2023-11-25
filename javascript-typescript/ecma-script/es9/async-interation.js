async function asyncFunc() {
  for await (let value of asyncIterable) {
    console.log(value);
  }
}
