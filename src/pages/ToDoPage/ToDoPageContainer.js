import React from 'react';
import { connect } from 'react-redux';

import ToDoPage from './ToDoPage';

const ToDoPageContainer = ({ listTodo }) => {
  return <ToDoPage listTodo={listTodo} />;
};

const mapStateToProps = state => {
  return {
    listTodo: state.todoRoot.todo,
  };
};

export default connect(mapStateToProps)(ToDoPageContainer);
