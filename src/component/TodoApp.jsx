import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Rohan 1', completed: false },
    { id: 2, text: 'Rohan 2', completed: false },
    { id: 3, text: 'Rohan 3', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
        setTodos([...todos ,
        { id:todos.length+1, text:newTodo ,completed:false}
    ])
    setNewTodo('')
      
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo=>(
        todo.id==id ?{...todo,completed: !todo.completed} : todo
        )))
   
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='todo-container'>
<div className="todo-app">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova atividade"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        <h3>List</h3>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default TodoApp;
