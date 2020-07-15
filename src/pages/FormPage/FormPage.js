import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ToDoOperations from '../../redux/ToDo/ToDoOperations';

const FormPage = () => {
  const dispatch = useDispatch();

  /* TITLE TODO */
  const [titleTodo, setTitle] = useState('');
  const handleChangeTitle = ({ target }) => setTitle(target.value);

  /* TEXT TODO */
  const [value, setInput] = useState('');
  const handleChangeText = ({ target }) => setInput(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(ToDoOperations.addToDoOperations(titleTodo, value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        value={titleTodo}
        onChange={handleChangeTitle}
        placeholder="Tilte..."
      />
      <input
        type="text"
        value={value}
        onChange={handleChangeText}
        placeholder="Text..."
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;
