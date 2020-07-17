import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivetRoute = ({ component: Component, ...allProps }) => {
  const token = useSelector(state => state.authRoot.token);
  console.log(token);

  return (
    <Route
      {...allProps}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

export default PrivetRoute;
