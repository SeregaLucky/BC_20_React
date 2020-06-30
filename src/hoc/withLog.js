import React from 'react';

const withLog = Component => {
  console.log('withLog');
  console.log('withLog');
  console.log('withLog');

  return function WithLog(props) {
    return <Component {...props} />;
  };
};

export default withLog;
