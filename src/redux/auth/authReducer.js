import { combineReducers } from 'redux';
import authTypes from './authTypes';
import authActions from './authActions';
// import api, { postLigin } from '../../servises/api';

import axios from 'axios';
axios.defaults.baseURL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

/* OPETATIONS */
export const loginOperations = (username, password) => (dispatch, getState) => {
  console.log(username, password);

  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  return axios
    .post('/login/?developer=Name', params)
    .then(res => {
      console.log(res.data);
      dispatch(authActions.loginSuccess(res.data.message.token));

      // dispatch({
      //   type: authTypes.LOGIN_SUCCESS,
      //   payload: { token: res.data.message.token },
      // });
    })
    .catch(err => {
      console.log(err);
    });
};

/* REDUCERS */
const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return action.payload.token;

    case authTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isShowTextReducer = (state = true, action) => {
  switch (action.type) {
    case authTypes.IS_SHOW_TEXT:
      return !state;

    case authTypes.SHOW_TEXT:
      return action.payload;

    case authTypes.HIDE_TEXT:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  token: tokenReducer,
  isShowText: isShowTextReducer,
});

// export const loginOperations = (username, password) => (dispatch, getState) => {
//   console.log(username, password);

//   // postLigin().th
//   // const aaa = api.postLigin(username, password);
//   // console.log(aaa);

//   api
//     .postLigin(username, password)
//     .then(data => {
//       console.log(data);
//       // dispatch({
//       //   type: 'auth/LOGIN_SUCCESS',
//       //   payload: { token: data.message.token },
//       // });
//     })
//     .cactch(err => console.log(err));
// };

//
//
