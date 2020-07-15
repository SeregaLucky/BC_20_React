import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoActions from '../../redux/ToDo/ToDoActions';
import ToDoOperations from '../../redux/ToDo/ToDoOperations';
import {
  getArrayIdsEditItem,
  // isSwowFormSelector,
} from '../../redux/ToDo/ToDoSelectors';

const ToDoPage = ({ item, id }) => {
  const dispatch = useDispatch();

  /* SELECTORS */
  const arrayIdsEditItem = useSelector(getArrayIdsEditItem);
  const isSwowForm = arrayIdsEditItem.some(idEdit => idEdit === id);

  /* METHODS */
  const deleteTodo = () => dispatch(ToDoOperations.deleteToDoOperations(id));
  const addIdEditItem = () => dispatch(ToDoActions.addIdEditItem(id));

  /* CHANGE INPUT */
  const [value, setInput] = useState('');
  const handleChange = ({ target }) => setInput(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(ToDoOperations.changeToDoOperations(id, value));
    dispatch(ToDoActions.deleteIdEditItem(id));

    setInput('');
  };

  // console.log('RENDER ONE ITEM');

  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.text}</p>

      {!isSwowForm && (
        <button type="button" onClick={addIdEditItem}>
          Start edit
        </button>
      )}

      <button type="button" onClick={deleteTodo}>
        Delete
      </button>

      {isSwowForm && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Edit</button>
        </form>
      )}
    </li>
  );
};

export default ToDoPage;
