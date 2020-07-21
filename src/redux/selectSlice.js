import { createSlice, combineReducers } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: [
    { id: 1, value: 'Work' },
    { id: 2, value: 'Go' },
  ],

  reducers: {
    ADD_SELECT: (state, { payload, type }) => {
      // console.log(payload);
      return [...state, payload.itemSelect];
    },

    DELETE_SELECT: (state, { payload }) => {
      return state.filter(item => item.id !== payload.id);
    },

    CHANGE_SELECT: (state, { payload }) => {
      return state.map(item =>
        item.id === payload.id ? { ...item, value: payload.value } : item,
      );
    },
  },
});

export const { ADD_SELECT, DELETE_SELECT, CHANGE_SELECT } = selectSlice.actions;

export default combineReducers({
  selectList: selectSlice.reducer,
});
