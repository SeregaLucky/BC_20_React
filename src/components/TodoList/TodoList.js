import React from 'react';

const TodoList = ({ listTodo, openModal }) => {
  return (
    <ul>
      {listTodo.map(({ id, title, todo }) => (
        <li key={id} onClick={openModal}>
          <h3>{title}</h3>
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
