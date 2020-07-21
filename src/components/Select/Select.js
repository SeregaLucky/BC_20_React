import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectList } from '../../redux/selectSelectors';

const Select = () => {
  // const selectList = useSelector(state => {
  //   return state.selectSlice.selectList;
  // });

  const selectList = useSelector(state => {
    return getSelectList(state);
  });

  // const selectList = useSelector(getSelectList);

  const [selectValue, setSelectValue] = useState('');
  const handleChange = ({ target }) => setSelectValue(target.value);

  return (
    <select name="selectMy" value={selectValue} onChange={handleChange}>
      <option value="" disabled>
        ...
      </option>

      {selectList.map(item => {
        // console.log(item);
        return (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
