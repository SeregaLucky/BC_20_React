import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectList } from '../../redux/selectSelectors';
import SelectListItem from '../SelectListItem/SelectListItem';

const SelectList = () => {
  const selectList = useSelector(state => getSelectList(state));

  return (
    <ul>
      {selectList.map(item => (
        <SelectListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SelectList;
