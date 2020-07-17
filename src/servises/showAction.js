export const showAction = store => next => action => {
  console.log('action', action);

  console.log(typeof action);

  next(action);
};
