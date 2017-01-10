import { combineReducers } from 'redux';
import todos from '../todo/Todo.reducer';

const reducer = combineReducers({
  todos,
});

export default reducer;
