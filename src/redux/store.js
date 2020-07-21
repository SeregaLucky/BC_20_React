// import { createStore } from "redux";

import { configureStore } from '@reduxjs/toolkit';
import selectSlice from './selectSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    selectSlice: selectSlice,
    counterSlice: counterSlice,
  },
});
