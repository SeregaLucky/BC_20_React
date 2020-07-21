import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_SELECT } from '../../redux/selectSlice';
import Select from '../../components/Select/Select';
import SelectList from '../../components/SelectList/SelectList';

const FormPage = () => {
  const dispatch = useDispatch();

  /* ADD SELECT */
  const [value, setTextSelect] = useState('');
  const handleChange = ({ target }) => setTextSelect(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('textSelect', textSelect);
    dispatch(
      ADD_SELECT({
        itemSelect: { id: Date.now(), value },
      }),
    );

    setTextSelect('');
  };

  /* SHOW LIST SLELCT */
  const [isShow, setIsShow] = useState(true);
  const changeIsShow = () => setIsShow(!isShow);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="..."
        />
        <button type="submit">Add</button>
      </form>

      <Select />

      <button type="button" onClick={changeIsShow}>
        {isShow ? 'Close' : 'Show'}
      </button>

      {isShow && <SelectList />}
    </>
  );
};

export default FormPage;
