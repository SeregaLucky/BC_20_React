import { createSelector } from 'reselect';
// console.log('createSelector', createSelector);

export const getListTodo = state => state.todoRoot.todo;

export const getIdEditNow = state => state.todoRoot.idEditItemNow;

export const isLoading = state => state.todoRoot.loading;

export const getError = state => state.todoRoot.todoError;

export const getArrayIdsEditItem = state => state.todoRoot.idEditItem;

export const isSwowFormSelector = createSelector(
  [getIdEditNow, getArrayIdsEditItem],
  (id, arrayIdsEditItem) => arrayIdsEditItem.some(idEdit => idEdit === id),
);

// export const isSwowFormSelector = id => {
//   console.log(11111111111111111111);
//   return createSelector([getArrayIdsEditItem], arrayIdsEditItem => {
//     console.log(22222222222);
//     return arrayIdsEditItem.some(idEdit => idEdit === id);
//   });
// };

// export const isSwowFormSelector = createSelector(
//   [getArrayIdsEditItem],
//   arrayIdsEditItem => arrayIdsEditItem.some(idEdit => idEdit === id),
// );

// export const isSwowFormSelector = (state, id) => {
//   console.log(11111111111111);
//   const arrayIdsEditItem = getArrayIdsEditItem(state);
//   return arrayIdsEditItem.some(idEdit => idEdit === id);
// };
