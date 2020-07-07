import React from 'react';
import { connect } from 'react-redux';

const ToDoPage = ({ listTodo }) => {
  console.log('listTodo', listTodo);

  return (
    <main>
      <h2>ToDoPage</h2>

      <ul>
        {listTodo.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => ({
  listTodo: state.todo.todo,
});

export default connect(mapStateToProps)(ToDoPage);
