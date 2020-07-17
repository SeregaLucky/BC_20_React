import { combineReducers } from 'redux';
import authTypes from './authTypes';

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
