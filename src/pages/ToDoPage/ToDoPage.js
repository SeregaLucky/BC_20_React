import React from 'react';
import { connect } from 'react-redux';
import ToDoActions from '../../redux/ToDo/ToDoActions';

import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';

const ToDoPage = ({
  listTodo,
  arrayIdsEditItem,
  deleteTodo,
  addIdEditItem,
}) => {
  return (
    <main>
      <h2>ToDoPage</h2>

      <ul>
        {listTodo.map(item => (
          <ToDoListItem
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            addIdEditItem={() => addIdEditItem(item.id)}
            isSwowForm={arrayIdsEditItem.some(id => id === item.id)}
          />
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    listTodo: state.todoRoot.todo,
    arrayIdsEditItem: state.todoRoot.idEditItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(ToDoActions.deleteItem(id)),
    changeTodo: (id, text) => dispatch(ToDoActions.changeItem(id, text)),
    addIdEditItem: id => dispatch(ToDoActions.addIdEditItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
