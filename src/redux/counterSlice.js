import { createSlice, combineReducers } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,

  reducers: {
    DEC: state => state - 1,
    INC: state => state + 1,
  },
});

export const { DEC, INC } = counterSlice.actions;

export default combineReducers({
  counter: counterSlice.reducer,
});
