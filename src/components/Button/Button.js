import React from 'react';

const Button = ({ text, changePosition }) => {
  return (
    <button type="button" onClick={changePosition}>
      {text}
    </button>
  );
};

export default Button;
