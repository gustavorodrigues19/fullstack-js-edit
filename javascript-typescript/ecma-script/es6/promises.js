let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

promise
  .then((message) => {
    console.log(message); // Success!
  })
  .catch((message) => {
    console.log(message);
  });
