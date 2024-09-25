import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="actions">
        <button onClick={() => onToggleComplete(todo.id)}>
          {todo.completed ? '✔️' : '✅'}
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-btn">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
