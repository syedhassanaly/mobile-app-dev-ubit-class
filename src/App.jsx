import React, { useState } from "react";

function App() {
  const [inp, setInp] = useState("");
  const [todo, setTodo] = useState([]);

  let setter = (e) => {
    setInp(e.target.value);
  };

  let getter = () => {
    if (inp.trim() === "") {
      alert("Input cannot be empty");
      return;
    }
    setTodo([...todo, inp]);
    setInp("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <input type="text" value={inp} onChange={setter} />
      <button onClick={getter}>Add</button>
      <br />
      <br />
      <div
        style={{
          background: "red",
          padding: 10,
          flex: 1,
          overflowY: "auto",
        }}
      >
        <h1>The Todo List</h1>
        <ul>
          {todo.map((value, index) => (
            <div key={index}>
              <li>{value}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
