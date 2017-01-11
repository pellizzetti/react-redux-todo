import React, { PropTypes } from 'react';

const TodoListComponent = ({ handleClick, todos }) =>
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
  </ul>;

TodoListComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    payload: PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    }),
  }).isRequired).isRequired,
};

export default TodoListComponent;
