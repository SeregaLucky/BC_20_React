import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

      {/* <button type="button" onClick={logout}>
        Logout
      </button> */}
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
    makeLogout: () => dispatch({ type: 'auth/LOGOUT_SUCCESS' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
