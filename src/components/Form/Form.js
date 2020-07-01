import React, { Component } from 'react';
// ({ titleValue, todoValue, onChange, addTodo })
class Form extends Component {
  state = {
    title: '',
    todo: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, todo } = this.state;

    this.props.addTodo(title, todo);
  };

  render() {
    const { title, todo } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          onChange={this.handleChange}
          type="text"
          name="title"
          placeholder="Title..."
        />
        <textarea
          value={todo}
          onChange={this.handleChange}
          name="todo"
          placeholder="TODO..."
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
