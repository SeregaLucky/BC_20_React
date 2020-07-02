import React from 'react';

import ContextPositionListTodo from '../../context/contextPositionListTodo';

const positionList = {
  table: {
    display: 'block',
  },
  flex: {
    display: 'flex',
  },
};

const TodoList = ({ listTodo, openModal }) => {
  return (
    <ContextPositionListTodo.Consumer>
      {({ position }) => (
        <ul style={positionList[position]}>
          {listTodo.map(({ id, title, todo }) => (
            // <li key={id} onClick={openModal}>
            <li key={id}>
              <h3>{title}</h3>
              <p>{todo}</p>
            </li>
          ))}
        </ul>
      )}
    </ContextPositionListTodo.Consumer>
  );
};

export default TodoList;
