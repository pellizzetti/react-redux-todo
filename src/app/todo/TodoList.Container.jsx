import { connect } from 'react-redux';
import { toggleTodo } from './Todo.actions';
import TodoListComponent from './TodoList.Component';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  handleClick: todoId => dispatch(toggleTodo(todoId)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListComponent);

export default TodoListContainer;
