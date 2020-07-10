import React, { Component } from 'react';

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

        <button type="button" onClick={() => deleteTodo(item.id)}>
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
export default ToDoPage;
