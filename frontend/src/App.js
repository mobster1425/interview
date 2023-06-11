import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://interview-backend-x6yp.onrender.com/api/v1/name",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log("Name created successfully");
        setName("");
      } else {
        console.log("Error creating name:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating name:", error);
    }
  };

  const handleGetNamesClick = async () => {
    try {
      const response = await fetch("https://interview-backend-x6yp.onrender.com/api/v1/name");
      if (response.ok) {
        const names = await response.json();
        setNames(names);
      } else {
        console.log("Error getting names:", response.statusText);
      }
    } catch (error) {
      console.error("Error getting names:", error);
    }
  };

  return (
    <div>
      <h1> Names</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleGetNamesClick}>Get Names</button>
      <ul>
        {names.map((name) => (
          <li key={name._id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;