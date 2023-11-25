fetch("https://random-data-api.com/api/v2/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished"));
