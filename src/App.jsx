import React, { useState } from "react";

function App() {
  const [inp, setInp] = useState("");
  let [name, setName] = useState("");

  function settingInput(e) {
    setInp(e.target.value);
  }

  function AddName() {
    setName(inp);
    setInp("");
  }

  const greet = () => {
    return "Hello " + name;
  };

  return (
    <div>
      <div>
        <h1>{greet()}</h1>
      </div>
      <input type="text" value={inp} onChange={settingInput} />
      <button onClick={AddName}>Set</button>
    </div>
  );
}

export default App;
