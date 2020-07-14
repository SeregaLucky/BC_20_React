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

const addItemSuccess = todo => ({
  type: ToDoTypes.ADD_ITEM_SUCCESS,

  payload: { todo },
});

const addItemFailure = error => ({
  type: ToDoTypes.ADD_ITEM_FAILURE,

  payload: { error },
});

/* DELETE */
const deleteItemStart = () => ({
  type: ToDoTypes.DELETE_ITEM_START,
});

const deleteItemSuccess = idItemDelete => ({
  type: ToDoTypes.DELETE_ITEM_SUCCESS,

  payload: { id: idItemDelete },
});

const deleteItemFailure = error => ({
  type: ToDoTypes.DELETE_ITEM_FAILURE,

  payload: { error },
});

/* CHANGE */
const changeItemStart = () => ({
  type: ToDoTypes.CHANGE_ITEM_START,
});

const changeItemSuccess = (idItemChange, changeText) => ({
  type: ToDoTypes.CHANGE_ITEM_SUCCESS,

  payload: {
    id: idItemChange,
    text: changeText,
  },
});

const changeItemFailure = error => ({
  type: ToDoTypes.CHANGE_ITEM_FAILURE,

  payload: { error },
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

  deleteItemStart,
  deleteItemSuccess,
  deleteItemFailure,

  changeItemStart,
  changeItemSuccess,
  changeItemFailure,

  addIdEditItem,
  deleteIdEditItem,
};
