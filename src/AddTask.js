// AddTask.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/Actions';
import './App.css'

function AddTask({ addTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddNewToDo = () => {
    const newTodoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    addTodo(newTodoObj);
    setNewDescription('');
    setNewTodoTitle('');
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title:</label>
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="What's the title of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <label>Description:</label>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="What's the description of your To Do?"
        />
      </div>
      <div className="todo-input-item">
        <button className="primary-btn" type="button" onClick={handleAddNewToDo}>
          Add
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTask);
