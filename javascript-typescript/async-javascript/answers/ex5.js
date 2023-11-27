async function waitForPromise() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          fetch("https://random-data-api.com/api/v2/users").then((response) =>
            response.json()
          )
        );
      }, 3000);
      // reject("Promise rejected");
    });

    const message = await promise;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

waitForPromise();
