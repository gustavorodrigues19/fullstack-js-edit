import { useState } from "react";

function StatePage() {
  const [counter, setCounter] = useState(0);
  const [onOff, setOnOff] = useState(false);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const divStyle = { backgroundColor: onOff ? "#fff" : "#000" };

  return (
    <div style={divStyle}>
      <h1 onClick={() => setOnOff(!onOff)}>Counter</h1>
      <h3>{counter}</h3>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default StatePage;
