import { combineReducers } from 'redux';
import ToDoTypes from './ToDoTypes';

const obj = {
  id: 1,
  text: 'To do ZERO',
};

const todoReducer = (state = [obj], action) => {
  switch (action.type) {
    case ToDoTypes.ADD_ITEM:
      return [...state, action.payload.todo];

    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
});
