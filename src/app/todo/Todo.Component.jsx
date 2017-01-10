import React, { PropTypes } from 'react';

const TodoComponent = ({ handleSubmit, todos }) =>
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" className="task" />
      <button type="submit">
        Add Todo
      </button>
    </form>
    <ul>
      {todos.map(todo => <li key={todo.payload.id}>{todo.payload.task}</li>)}
    </ul>
  </div>;

TodoComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    payload: PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    }),
  }).isRequired).isRequired,
};

export default TodoComponent;
