import api from '../../servises/api';
import ToDoActions from './ToDoActions';

const getAllToDoOperations = () => dispatch => {
  dispatch(ToDoActions.getItemStart());

  api
    .getAllTodo()
    .then(({ data }) => dispatch(ToDoActions.getItemSuccess(data)))
    .catch(error => dispatch(ToDoActions.getItemFailure(error)));
};

export default { getAllToDoOperations };
