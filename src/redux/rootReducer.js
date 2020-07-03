import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

export default rootReducer;
