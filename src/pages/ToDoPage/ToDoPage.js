import React from 'react';

import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';

const ToDoPage = ({ listTodo }) => {
  console.log(listTodo);
  return (
    <main>
      <h2>ToDoPage</h2>

      <ul>
        {listTodo.map(item => (
          <ToDoListItem key={item.id} item={item} id={item.id} />
        ))}
      </ul>
    </main>
  );
};

export default ToDoPage;
