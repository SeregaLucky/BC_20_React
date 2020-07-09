import React, { Component } from 'react';

class ToDoPage extends Component {
  state = { value: '' };

  handleChange = ({ target }) => this.setState({ value: target.value });

  render() {
    const { item, isSwowForm, deleteTodo, addIdEditItem } = this.props;
    const { value } = this.state;

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
          <form onSubmit={() => {}}>
            <input type="text" value={value} onChange={this.handleChange} />
            <button type="button">Edit</button>
          </form>
        )}
      </li>
    );
  }
}
export default ToDoPage;
