let todoIdCounter = 0;

export const addTodo = (task) => {
  todoIdCounter += 1;
  return {
    type: 'ADD_TODO',
    payload: {
      id: todoIdCounter,
      task,
    },
  };
};

export const toggleTodo = todoId => ({
  type: 'TOGGLE_TODO',
  payload: {
    id: todoId,
  },
});
