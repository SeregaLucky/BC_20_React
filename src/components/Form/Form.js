import React from 'react';

import withRandomNumber from '../../hoc/withRandomNumber';
import withLog from '../../hoc/withLog';

const Form = ({ inputValue, onChange, setMain, randomNumber }) => {
  const handleSubmit = e => {
    e.preventDefault();

    setMain(inputValue);
  };

  return (
    <>
      <h3>{randomNumber}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default withLog(withRandomNumber(Form));
