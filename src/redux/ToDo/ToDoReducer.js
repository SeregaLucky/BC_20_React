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

    case ToDoTypes.CHANGE_ITEM:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item,
      );

    default:
      return state;
  }
};

const idEditItemReducer = (state = [], action) => {
  switch (action.type) {
    case ToDoTypes.ADD_ID_EDIT_ITEM:
      return [...state, action.payload.id];

    case ToDoTypes.DELETE_ID_EDIT_ITEM:
      return state.filter(id => id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
  idEditItem: idEditItemReducer,
});
