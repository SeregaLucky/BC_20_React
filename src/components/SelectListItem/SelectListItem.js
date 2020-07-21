import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_SELECT, CHANGE_SELECT } from '../../redux/selectSlice';

const SelectListItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteSelect = () => dispatch(DELETE_SELECT({ id: item.id }));

  /* FORM: CHANGE */
  const [value, setValue] = useState('');
  const handleChange = ({ target }) => setValue(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(CHANGE_SELECT({ id: item.id, value: value }));

    setValue('');
  };

  return (
    <li>
      <h3>{item.value}</h3>
      <button type="button" onClick={deleteSelect}>
        Delete
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Edit</button>
      </form>
    </li>
  );
};

export default SelectListItem;
