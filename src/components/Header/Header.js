import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import authTypes from '../../redux/auth/authTypes';
import authActions from '../../redux/auth/authActions';

const Header = ({ token, makeLogout }) => {
  const logout = () => makeLogout();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>

          {token && (
            <li>
              <Link to="/userProfile">UserProfile</Link>
            </li>
          )}

          {!token && (
            <li>
              <Link to="/auth">AuthPage</Link>
            </li>
          )}
        </ul>
      </nav>

      {token && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authRoot.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeLogout: () => dispatch(authActions.logicSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//
//
//
//

// const mapDispatchToProps = dispatch => {
//   return {
//     makeLogout: () => dispatch({ type: authTypes.LOGOUT_SUCCESS }),
//   };
// };
