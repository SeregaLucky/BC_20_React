import api from '../../servises/api';
import ToDoActions from './ToDoActions';

const getAllToDoOperations = () => dispatch => {
  dispatch(ToDoActions.getItemStart());

  api
    .getAllTodo()
    .then(({ data }) => dispatch(ToDoActions.getItemSuccess(data)))
    .catch(error => dispatch(ToDoActions.getItemFailure(error)));
};

const addToDoOperations = (title, text) => dispatch => {
  dispatch(ToDoActions.addItemStart());

  api
    .addTodo(title, text)
    .then(({ data }) => {
      console.log(data);
      dispatch(ToDoActions.addItemSuccess(data));
    })
    .catch(error => dispatch(ToDoActions.addItemFailure(error)));
};

const deleteToDoOperations = id => dispatch => {
  dispatch(ToDoActions.deleteItemStart());

  api
    .deleteTodo(id)
    .then(() => {
      console.log('DELETE ITEM');
      dispatch(ToDoActions.deleteItemSuccess(id));
    })
    .catch(error => dispatch(ToDoActions.deleteItemFailure(error)));
};

const changeToDoOperations = (id, text) => dispatch => {
  dispatch(ToDoActions.changeItemStart());

  api
    .changeTodo(id, text)
    .then(({ data }) => {
      console.log(data);
      dispatch(ToDoActions.changeItemSuccess(id, text));
    })
    .catch(error => dispatch(ToDoActions.changeItemFailure(error)));
};

export default {
  getAllToDoOperations,
  addToDoOperations,
  deleteToDoOperations,
  changeToDoOperations,
};
