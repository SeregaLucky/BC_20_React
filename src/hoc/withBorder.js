import React from 'react';

const WithBorder = ({ children }) => {
  return (
    <div
      style={{
        borderWidth: '2px',
        borderStyle: 'double',
        borderColor: 'orange',
      }}
    >
      {children}
    </div>
  );
};

export default WithBorder;
