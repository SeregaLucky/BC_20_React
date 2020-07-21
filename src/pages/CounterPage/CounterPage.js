import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStartCounter } from '../../redux/counterSelectors';
import { DEC, INC } from '../../redux/counterSlice';

const CounterPage = () => {
  const dispatch = useDispatch();

  const startCounter = useSelector(state => getStartCounter(state));

  const dec = () => dispatch(DEC());
  const inc = () => dispatch(INC());

  return (
    <>
      <span>{startCounter}</span>
      <br />

      <button type="button" onClick={dec}>
        Dec
      </button>
      <button type="button" onClick={inc}>
        Inc
      </button>
    </>
  );
};

export default CounterPage;
