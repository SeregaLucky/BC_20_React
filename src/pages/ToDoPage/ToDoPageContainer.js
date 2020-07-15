import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoOperations from '../../redux/ToDo/ToDoOperations';
import {
  getListTodo,
  isLoading,
  getError,
} from '../../redux/ToDo/ToDoSelectors';

import ToDoPage from './ToDoPage';
import Loader from '../../components/Loader/Loader';

const ToDoPageContainer = () => {
  const dispatch = useDispatch();

  /* SELECTORS */
  const listTodo = useSelector(getListTodo);
  const isLoadingNow = useSelector(isLoading);
  const error = useSelector(state => getError(state));

  /* MAKE GET ALL TODO */
  useEffect(() => dispatch(ToDoOperations.getAllToDoOperations()), []);

  return (
    <>
      {isLoadingNow && <Loader />}

      <ToDoPage listTodo={listTodo} />

      {error && <p>ERRORRRRRR</p>}
    </>
  );
};

export default ToDoPageContainer;
