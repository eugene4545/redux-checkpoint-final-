import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTodo } from './redux/Actions';
import './editTask.css'

function EditTask({ task, index, editTodo, onCancel }) {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    const editedTask = {
      title: editedTitle,
      description: editedDescription,
    };
    editTodo(index, editedTask); // Use the provided 'index'
    onCancel();
  };

  return (
    <div className="edit-task">
      <h1 className='title'>Edit</h1>
      <input
      className='edit'
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        className='edit'
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button className="editBtn" onClick={handleSave}>Save</button>
      <button className='editred' onClick={onCancel}>Cancel</button>
    </div>
  );
}

const mapDispatchToProps = {
  editTodo,
};

export default connect(null, mapDispatchToProps)(EditTask);
