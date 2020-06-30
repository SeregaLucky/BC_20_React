import React from 'react';

const withRandomNumber = Component => {
  const randomNumber = Math.random();

  return function WithRandomNumber(props) {
    return <Component {...props} randomNumber={randomNumber} />;
  };
};

export default withRandomNumber;
