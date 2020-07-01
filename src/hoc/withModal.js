// import React from 'react-dom';

// const withModal = Component => {
//   const text = '111111111111111';

//   return function WithModal(props) {
//     return <Component {...props} text={text} />;
//   };
// };

// const withModal = Component => props => <Component {...props} />;

// export default withModal;

import React from 'react';

const withModal = Component => {
  const text = '111111111111111';

  return function WithModal(props) {
    return <Component {...props} text={text} />;
  };
};

export default withModal;
