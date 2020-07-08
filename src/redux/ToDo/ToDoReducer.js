import { combineReducers } from 'redux';
import ToDoTypes from './ToDoTypes';

const obj = {
  id: 1,
  text: 'To do ZERO',
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ToDoTypes.ADD_ITEM:
      return [...state, action.payload.todo];

    case ToDoTypes.DELETE_ITEM:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
});
