import { combineReducers } from 'redux';

import todoReducer from './ToDo/ToDoReducer';
// console.log('todoReducer', todoReducer);

const rootReducer = combineReducers({
  todoRoot: todoReducer,
});

export default rootReducer;
