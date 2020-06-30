import React from 'react';
import LogicIncement from '../../hoc/LogicIncement';

const Main = () => {
  return (
    <LogicIncement>
      {({ value, inc }) => (
        <>
          <h2>{value}</h2>

          <button type="button" onClick={inc}>
            Incriment
          </button>
        </>
      )}
    </LogicIncement>
  );
};

export default Main;
