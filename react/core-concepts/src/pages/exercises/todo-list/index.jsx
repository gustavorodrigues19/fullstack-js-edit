import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [items] = useState(["primeiro item"]);

  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button>Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListPage;
