import api from '../../servises/api';
import authActions from './authActions';

export const loginOperations = (username, password) => (dispatch, getState) => {
  console.log(username, password);

  api
    .postLigin(username, password)
    .then(data => {
      dispatch(authActions.loginSuccess(data.message.token));
    })
    .catch(err => console.log(err));
};
