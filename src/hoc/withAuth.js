import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = Component => {
  // console.log(111);
  function WithAuth({ token, ...allProps }) {
    // console.log(token);
    return token ? <Redirect to="/" /> : <Component {...allProps} />;
  }

  const mapStateToProps = state => {
    return {
      token: state.authRoot.token,
    };
  };

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
