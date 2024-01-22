import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((resp) => resp.json())
  //       .then((resp) => setUser(resp));
  //   }, [counter]);
  async function fetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const userApi = await resp.json();
    setUser(userApi);
  }

  useEffect(() => {
    fetchData();
  }, [counter]);

  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        <h3>{user.title}</h3>
      </div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
