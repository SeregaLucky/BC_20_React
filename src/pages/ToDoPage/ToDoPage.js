import React from 'react';
import { connect } from 'react-redux';
import ToDoActions from '../../redux/ToDo/ToDoActions';

import ToDoListItem from '../../components/ToDoListItem/ToDoListItem';

const ToDoPage = ({
  listTodo,
  arrayIdsEditItem,

  deleteTodo,
  changeTodo,
  addIdEditItem,
  deleteIdEditItem,
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
            deleteIdEditItem={() => deleteIdEditItem(item.id)}
            changeTodo={text => changeTodo(item.id, text)}
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
    deleteIdEditItem: id => dispatch(ToDoActions.deleteIdEditItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
