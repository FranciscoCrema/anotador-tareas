import React from "react";
import "../App.css";

function TodoItem({ todo, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  return (
    <div className="todo-item" style={getStyle()}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      {todo.task}
      <button className="add-btn" onClick={() => onDeleteItem(todo.id)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
