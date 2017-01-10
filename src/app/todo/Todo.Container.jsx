import { connect } from 'react-redux';
import { addTodo } from './Todo.actions';
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
});

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoComponent);

export default TodoContainer;
