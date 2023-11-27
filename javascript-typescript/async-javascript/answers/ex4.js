new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolvida após 3 segundos");
  }, 3000);
}).then((message) => console.log(message));
