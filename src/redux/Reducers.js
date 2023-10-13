// reducers.js

const initialState = {
    allTodos: [],
    completedTodos: [],
    isCompletedScreen: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        // Handle adding a new task to `allTodos`.
        return {
          ...state,
          allTodos: [...state.allTodos, action.payload],
        };
  
      case 'DELETE_TODO':
        // Handle deleting a task from `allTodos`.
        const updatedTodos = [...state.allTodos];
        updatedTodos.splice(action.payload, 1);
        return {
          ...state,
          allTodos: updatedTodos,
        };
  
      case 'COMPLETE_TODO':
        // Handle marking a task as completed and moving it to `completedTodos`.
        const completedTask = state.allTodos[action.payload];
        return {
          ...state,
          allTodos: state.allTodos.filter((_, index) => index !== action.payload),
          completedTodos: [...state.completedTodos, { ...completedTask, completedOn: new Date() }],
        };
  
      case 'DELETE_COMPLETED_TODO':
        // Handle deleting a completed task from `completedTodos`.
        const updatedCompletedTodos = [...state.completedTodos];
        updatedCompletedTodos.splice(action.payload, 1);
        return {
          ...state,
          completedTodos: updatedCompletedTodos,
        };
  
      case 'TOGGLE_COMPLETED_SCREEN':
        // Toggle between "To Do" and "Completed" screens.
        return {
          ...state,
          isCompletedScreen: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  