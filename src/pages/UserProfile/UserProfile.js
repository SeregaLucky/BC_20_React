import React from 'react';

const UserProfile = () => {
  return <h2>UserProfile</h2>;
};

export default UserProfile;

//
//
//
//

// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// const UserProfile = ({ token }) => {
//   console.log(token);

//   if (!token) {
//     return <Redirect to="/" />;
//   }

//   return <h2>UserProfile</h2>;
// };

// const mapStateToProps = state => {
//   return {
//     token: state.authRoot.token,
//   };
// };

// export default connect(mapStateToProps)(UserProfile);
