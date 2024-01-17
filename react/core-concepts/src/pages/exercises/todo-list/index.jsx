import { useState } from "react";
function TodoListPage() {
  const [textValue, setTextValue] = useState("");
  const [items, setItems] = useState([]);

  const handleRemove = (index) => {
    const newArr = [...items];
    // newArr.splice(index, 1);
    const arr = newArr.filter((item, key) => index !== key);
    setItems(arr);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setItems([...items, textValue]);
        }}
      >
        <input
          type="text"
          value={textValue}
          onChange={(event) => setTextValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={`${index}-${item}`} onClick={() => handleRemove(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListPage;
