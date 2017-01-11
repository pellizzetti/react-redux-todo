import React, { PropTypes } from 'react';

const TodoComponent = ({ handleSubmit, handleClick, todos }) =>
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" className="task" />
      <button type="submit">
        Add Todo
      </button>
    </form>
    <ul>
      {todos.map(todo =>
        <li
          key={todo.payload.id}
          onClick={() => handleClick(todo.payload.id)}
          style={{ textDecoration: todo.payload.completed ? 'line-through' : 'none' }}
        >
          {todo.payload.task}
        </li>)
      }
    </ul>
  </div>;

TodoComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    payload: PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    }),
  }).isRequired).isRequired,
};

export default TodoComponent;
