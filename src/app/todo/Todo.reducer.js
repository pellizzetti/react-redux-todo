const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        payload: {
          id: action.payload.id,
          task: action.payload.task,
          completed: false,
        },
      };
    case 'TOGGLE_TODO':
      if (state.payload.id !== action.payload.id) {
        return state;
      }

      return {
        ...state,
        payload: {
          id: state.payload.id,
          task: state.payload.task,
          completed: !state.payload.completed,
        },
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
