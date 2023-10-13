// App.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  completeTodo,
  deleteCompletedTodo,
  toggleCompletedScreen,
  editTodo,
} from './redux/Actions';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';

import EditTask from './EditTask';
import './App.css'

function App({
  allTodos,
  completedTodos,
  isCompletedScreen,
  addTodo,
  deleteTodo,
  completeTodo,
  deleteCompletedTodo,
  toggleCompletedScreen,
  editTodo,
}) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  




  const handleAddNewToDo = () => {
    const newTodoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    addTodo(newTodoObj);
    setNewDescription('');
    setNewTodoTitle('');
  };

  const handleToDoDelete = (index) => {
    deleteTodo(index);
  };

  const handleCompletedTodoDelete = (index) => {
    deleteCompletedTodo(index);
  };

  const handleComplete = (index) => {
    completeTodo(index);
  };

  const handleEdit = (index) => {
    setEditingTaskIndex(index);
  };
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
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
            <button
              className="primary-btn"
              type="button"
              onClick={handleAddNewToDo}
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => toggleCompletedScreen(false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => toggleCompletedScreen(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
          {isCompletedScreen === false &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>

                  <AiTwotoneEdit 
                  title="Edit"
                  className='icon'
                  onClick={()=>handleEdit(index)}
                  />

                  <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    onClick={() => handleToDoDelete(index)}
                  />
                  <BsCheckLg
                    title="Completed?"
                    className="check-icon"
                    onClick={() => handleComplete(index)}
                  />
                </div>
              </div>
            ))}
          {isCompletedScreen === true &&
            completedTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p> <i>Completed at: {item.completedOn.toLocaleString()} </i></p>
                  <p>Good job!!</p>

                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleCompletedTodoDelete(index)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {editingTaskIndex !== null && (
        <EditTask
          task={allTodos[editingTaskIndex]}
          index={editingTaskIndex} // Pass the 'index'
          onCancel={() => setEditingTaskIndex(null)}
        />
      )}

    </div>
  );
}

const mapStateToProps = (state) => ({
  allTodos: state.allTodos,
  completedTodos: state.completedTodos,
  isCompletedScreen: state.isCompletedScreen,
});

export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  completeTodo,
  deleteCompletedTodo,
  toggleCompletedScreen,
  editTodo,
})(App);
