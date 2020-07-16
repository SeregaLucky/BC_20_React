import React, { useState, useEffect } from 'react';

const CounterPageHook = () => {
  // state = {
  //   value: 0,
  //   step: 1,
  //   age: 22,
  //   power: 33,
  // };

  /* COUNTER */
  const [value, setValue] = useState(10);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('useEffect componentDidMount + componentDidUpdate');
  });

  // componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log('useEffect ALL');

    return () => {
      console.log('useEffect componentWillUnmount');
    };
  }, []);

  // componentDidMount
  useEffect(() => {
    console.log('useEffect DidMount');
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('useEffect componentDidUpdate');
  }, [value]);

  const inc = () => setValue(prevValue => prevValue + 1);

  const dec = () => setValue(prevValue => prevValue - 1);

  /* INPUT */
  const [text, setText] = useState('');

  const handleChange = ({ target }) => setText(target.value);

  return (
    <div>
      <span>{value}</span>
      <br />

      <button type="button" onClick={dec}>
        Dec -
      </button>
      <button type="button" onClick={inc}>
        Inc +
      </button>

      <div>
        <input value={text} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CounterPageHook;
