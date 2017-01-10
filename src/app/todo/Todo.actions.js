let todoId = 0;

export const addTodo = (task) => {
  todoId += 1;
  return {
    type: 'ADD_TODO',
    payload: {
      id: todoId,
      task,
    },
  };
};
