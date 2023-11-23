// 1- Capturar o valor do input
// 2- Colocar o valor do input em uma variável
// 3- Clicar no botão "Add"
// 4- Criar a lista
// 5- Criar o elemento
// 6- Inserir o valor do input no elemento
// 7- Inserir o elemento na lista
// 8- Exibir a lista na tela
// 9- Marcar/desmarcar checkbox e riscar o texto (css)

const formElem = document.getElementById("form");
formElem.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputElem = document.getElementById("input-name");
  const inputValue = inputElem.value;

  inputElem.value = "";

  const ulElem = document.getElementById("todo-list");

  const liElem = document.createElement("li");
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");

  liElem.appendChild(checkboxElem);
  const nodeText = document.createTextNode(inputValue);
  liElem.appendChild(nodeText);

  checkboxElem.addEventListener("click", function () {
    const isChecked = checkboxElem.checked;

    if (isChecked) {
      liElem.style.textDecoration = "line-through";
    } else {
      liElem.style.textDecoration = "none";
    }
  });

  ulElem.appendChild(liElem);
});
