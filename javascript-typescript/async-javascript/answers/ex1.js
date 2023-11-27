fetch("https://api.github.com/users/github")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));
