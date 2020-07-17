import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authReducer';
console.log(authReducer);

const authPersistConfig = {
  key: 'authRoot',
  storage: storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  // authRoot: authReducer,
  authRoot: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
