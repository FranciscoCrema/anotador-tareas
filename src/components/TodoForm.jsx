import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="formu">
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleOnChange} />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default TodoForm;
