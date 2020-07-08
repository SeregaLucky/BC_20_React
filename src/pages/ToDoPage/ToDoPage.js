import React from 'react';
import { connect } from 'react-redux';
import ToDoActions from '../../redux/ToDo/ToDoActions';

const ToDoPage = ({ listTodo, deleteTodo }) => {
  console.log('listTodo', listTodo);

  return (
    <main>
      <h2>ToDoPage</h2>

      <ul>
        {listTodo.map(item => (
          <li key={item.id}>
            <h3>{item.text}</h3>
            <button type="button" onClick={() => deleteTodo(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    listTodo: state.todoRoot.todo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(ToDoActions.deleteItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
