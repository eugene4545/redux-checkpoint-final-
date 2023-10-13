// actions.js

export const addTodo = (newTodo) => ({
    type: 'ADD_TODO',
    payload: newTodo,
  });
  
  export const deleteTodo = (index) => ({
    type: 'DELETE_TODO',
    payload: index,
  });
  
  export const completeTodo = (index) => ({
    type: 'COMPLETE_TODO',
    payload: index,
  });
  
  export const toggleCompletedScreen = (isCompletedScreen) => ({
    type: 'TOGGLE_COMPLETED_SCREEN',
    payload: isCompletedScreen,
  });
  
  // actions.js

export const deleteCompletedTodo = (index) => ({
    type: 'DELETE_COMPLETED_TODO',
    payload: index,
  });
  