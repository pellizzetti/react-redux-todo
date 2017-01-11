import { connect } from 'react-redux';
import { addTodo } from './Todo.actions';
import TodoPromptComponent from './TodoPrompt.Component';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const taskInput = e.target.querySelector('input.task');
    dispatch(addTodo(taskInput.value));
    taskInput.value = '';
  },
});

const TodoPromptContainer = connect(
  null,
  mapDispatchToProps,
)(TodoPromptComponent);

export default TodoPromptContainer;
