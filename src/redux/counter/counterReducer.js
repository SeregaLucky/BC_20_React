import { combineReducers } from 'redux';

// TYPES
const INC = 'counter/INC';
const DEC = 'counter/DEC';

// ACTIONS
export const inc = () => ({
  type: INC,
  payload: 1,
});
export const dec = () => ({
  type: DEC,
  payload: 1,
});

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC:
      return state + action.payload;

    case DEC:
      return state - action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer,
});
