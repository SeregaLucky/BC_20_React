import ToDoTypes from './ToDoTypes';

const addItem = text => ({
  type: ToDoTypes.ADD_ITEM,

  payload: {
    todo: {
      id: Date.now(),
      text,
    },
  },
});

const deleteItem = idItemDelete => ({
  type: ToDoTypes.DELETE_ITEM,

  payload: { id: idItemDelete },
});

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
  addItem,
  deleteItem,
  changeItem,
  addIdEditItem,
  deleteIdEditItem,
};
