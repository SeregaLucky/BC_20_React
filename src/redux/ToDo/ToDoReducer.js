import { combineReducers } from 'redux';
import ToDoTypes from './ToDoTypes';

const obj = {
  id: 1,
  text: 'To do ZERO',
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ToDoTypes.GET_ITEM_SUCCESS:
      return [...state, ...action.payload.listToDo];

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

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case ToDoTypes.GET_ITEM_START:
      return true;

    case ToDoTypes.GET_ITEM_SUCCESS:
    case ToDoTypes.GET_ITEM_FAILURE:
      return false;

    default:
      return state;
  }
};

const todoErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ToDoTypes.GET_ITEM_FAILURE:
      return payload.error;

    case ToDoTypes.GET_ITEM_START:
    case ToDoTypes.GET_ITEM_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  todo: todoReducer,
  idEditItem: idEditItemReducer,
  loading: loadingReducer,
  todoError: todoErrorReducer,
});
