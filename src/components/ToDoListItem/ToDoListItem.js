import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoActions from '../../redux/ToDo/ToDoActions';

class ToDoPage extends Component {
  state = { value: '' };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { deleteIdEditItem, changeTodo } = this.props;

    changeTodo(this.state.value);
    deleteIdEditItem();
  };

  render() {
    const { item, isSwowForm, deleteTodo, addIdEditItem } = this.props;
    const { value } = this.state;
    console.log('RENDER ONE ITEM');

    return (
      <li>
        <h3>{item.text}</h3>

        {!isSwowForm && (
          <button type="button" onClick={addIdEditItem}>
            Start edit
          </button>
        )}

        <button type="button" onClick={deleteTodo}>
          Delete
        </button>

        {isSwowForm && (
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={value} onChange={this.handleChange} />
            <button type="submit">Edit</button>
          </form>
        )}
      </li>
    );
  }
}

const mapStateToProps = (state, { id }) => {
  // console.log(11111111111111);

  const arrayIdsEditItem = state.todoRoot.idEditItem;
  const isSwowForm = arrayIdsEditItem.some(idEdit => idEdit === id);

  return {
    isSwowForm,
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    deleteTodo: () => dispatch(ToDoActions.deleteItem(id)),
    changeTodo: text => dispatch(ToDoActions.changeItem(id, text)),
    addIdEditItem: () => dispatch(ToDoActions.addIdEditItem(id)),
    deleteIdEditItem: () => dispatch(ToDoActions.deleteIdEditItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
