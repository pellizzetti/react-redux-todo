import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './Todo.actions';
import TodoComponent from './Todo.Component';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault();
    const taskInput = e.target.querySelector('input.task');
    dispatch(addTodo(taskInput.value));
    taskInput.value = '';
  },
  handleClick: todoId => dispatch(toggleTodo(todoId)),
});

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent);

export default TodoContainer;
