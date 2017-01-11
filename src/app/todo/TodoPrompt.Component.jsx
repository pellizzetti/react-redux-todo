import React, { PropTypes } from 'react';

const TodoPromptComponent = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <input type="text" className="task" />
    <button type="submit">Add Todo</button>
  </form>;

TodoPromptComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoPromptComponent;
