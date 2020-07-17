import React, { useState } from 'react';
import withAuth from '../../hoc/withAuth';
import { useDispatch } from 'react-redux';
import { loginOperations } from '../../redux/auth/authOperations';

const AuthPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const changeLogin = ({ target }) => setLogin(target.value);

  const [password, setPassword] = useState('');
  const changePassword = ({ target }) => setPassword(target.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginOperations(login, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={login}
        onChange={changeLogin}
        placeholder="Login..."
      />
      <input
        type="text"
        value={password}
        onChange={changePassword}
        placeholder="Password..."
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default withAuth(AuthPage);
