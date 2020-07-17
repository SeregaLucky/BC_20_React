import authTypes from './authTypes';

const loginSuccess = token => {
  return {
    type: authTypes.LOGIN_SUCCESS,

    payload: {
      token: token,
    },
  };
};

const logautSuccess = () => {
  return {
    type: authTypes.LOGOUT_SUCCESS,
  };
};

const isShowText = () => {
  return {
    type: authTypes.IS_SHOW_TEXT,
  };
};

const showText = () => {
  return {
    type: authTypes.SHOW_TEXT,

    payload: true,
  };
};

const hideText = () => {
  return {
    type: authTypes.HIDE_TEXT,

    payload: false,
  };
};

export default {
  loginSuccess,
  logautSuccess,
  isShowText,
  showText,
  hideText,
};

// export default {
//   LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
//   LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',

//   IS_SHOW_TEXT: 'auth/IS_SHOW_TEXT',
//   SHOW_TEXT: 'auth/SHOW_TEXT',
//   HIDE_TEXT: 'auth/HIDE_TEXT',
// };
