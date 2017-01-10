const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        payload: {
          id: action.payload.id,
          task: action.payload.task,
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
    default:
      return state;
  }
};

export default todos;
