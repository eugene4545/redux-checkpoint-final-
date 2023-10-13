// ListTask.js

import React from 'react';
import { connect } from 'react-redux';
import { toggleCompletedScreen } from './redux/Actions';
import Task from './Task';
import './App.css';

function ListTask({ allTodos, completedTodos, isCompletedScreen, toggleCompletedScreen }) {
  return (
    <div className="todo-wrapper">
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
      {/* ... Your filter buttons and list rendering code ... */}
      <div className="todo-list">
        {isCompletedScreen === false &&
          allTodos.map((item, index) => <Task key={index} item={item} />)}

        {isCompletedScreen === true &&
          completedTodos.map((item, index) => <Task key={index} item={item} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allTodos: state.allTodos,
  completedTodos: state.completedTodos,
  isCompletedScreen: state.isCompletedScreen,
});

const mapDispatchToProps = {
  toggleCompletedScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
