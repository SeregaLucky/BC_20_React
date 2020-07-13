import ToDoTypes from './ToDoTypes';

/* GET */
const getItemStart = () => ({
  type: ToDoTypes.GET_ITEM_START,
});

const getItemSuccess = listToDo => ({
  type: ToDoTypes.GET_ITEM_SUCCESS,

  payload: { listToDo },
});

const getItemFailure = error => ({
  type: ToDoTypes.GET_ITEM_FAILURE,

  payload: { error },
});

/* ADD */
const addItemStart = () => ({
  type: ToDoTypes.ADD_ITEM_START,
});

const addItemSuccess = text => ({
  type: ToDoTypes.ADD_ITEM_SUCCESS,

  payload: {
    todo: {
      id: Date.now(),
      text,
    },
  },
});

const addItemFailure = error => ({
  type: ToDoTypes.ADD_ITEM_FAILURE,

  payload: { error },
});

/* DELETE */
const deleteItem = idItemDelete => ({
  type: ToDoTypes.DELETE_ITEM,

  payload: { id: idItemDelete },
});

/* CHANGE */
const changeItem = (idItemChange, changeText) => ({
  type: ToDoTypes.CHANGE_ITEM,

  payload: {
    id: idItemChange,
    text: changeText,
  },
});

const addIdEditItem = id => ({
  type: ToDoTypes.ADD_ID_EDIT_ITEM,

  payload: {
    id: id,
  },
});

const deleteIdEditItem = id => ({
  type: ToDoTypes.DELETE_ID_EDIT_ITEM,

  payload: {
    id: id,
  },
});

export default {
  getItemStart,
  getItemSuccess,
  getItemFailure,

  addItemStart,
  addItemSuccess,
  addItemFailure,

  deleteItem,
  changeItem,
  addIdEditItem,
  deleteIdEditItem,
};
