import React from "react";

function App() {
  const user = {
    name: "Syed Hassan Ali",
    age: 20,
    city: "Karachi",
  };

  const colors = ["Red", "Yellow", "Green"];

  return (
    <div>
      <h1>User Data</h1>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
      <h4>{user.city}</h4>
      <br />
      <hr />
      <h1>Colors Array</h1>
      <h2>{colors[0]}</h2>
      <h3>{colors[1]}</h3>
      <h4>{colors[2]}</h4>
    </div>
  );
}

export default App;
