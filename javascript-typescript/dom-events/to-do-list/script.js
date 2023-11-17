function handleSubmit(event) {
  event.preventDefault();

  const inputField = document.getElementById("input-name");
  let value = inputField.value;

  if (value === "") {
    alert("Por favor adicione uma tarefa");
    return;
  }

  const todoList = document.getElementById("todo-list");

  const liElem = document.createElement("li");
  const labelElem = document.createElement("label");
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");

  checkboxElem.addEventListener("click", function () {
    if (checkboxElem.checked) {
      labelElem.style.textDecoration = "line-through";
    } else {
      labelElem.style.textDecoration = "none";
    }
  });

  labelElem.textContent = value;
  liElem.appendChild(checkboxElem);
  liElem.appendChild(labelElem);

  todoList.appendChild(liElem);

  inputField.value = "";
}

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
