import React, { Component } from 'react';

// import FormToDo from '../FormToDo/FormToDo';

class ToDoListItem extends Component {
  state = {
    title: this.props.title,
    textToDo: this.props.textToDo,
    rools: this.props.rools,

    isEdit: false,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, changeToDo } = this.props;
    const { rools, title, textToDo } = this.state;

    changeToDo(id, { rools, title, textToDo });

    this.changeIsEdit();
  };

  deleteToDo = () => {
    const { id, deleteItem } = this.props;
    deleteItem(id);
  };

  changeIsEdit = () =>
    this.setState(prevState => ({ isEdit: !prevState.isEdit }));

  render() {
    const { isEdit } = this.state;
    const { rools, title, textToDo } = this.state;

    return isEdit ? (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Title TODO..."
          />
          <br />

          <textarea
            value={textToDo}
            onChange={this.handleChange}
            name="textToDo"
            placeholder="Text TODO..."
          />
          <br />

          <label>
            Вы согласны?
            <input
              // value={}
              checked={rools}
              onChange={this.handleChange}
              type="checkbox"
              name="rools"
              placeholder="Title TODO..."
            />
          </label>
          <br />

          <button type="submit">Edit</button>
        </form>
      </>
    ) : (
      <li>
        <h3>{title}</h3>
        <p>{textToDo}</p>
        <span> Согласен: {rools ? 'Yes' : 'NO'}</span>

        <button onClick={this.changeIsEdit} type="button">
          Edit
        </button>

        <button onClick={this.deleteToDo} type="button">
          Delete
        </button>
      </li>
    );
  }
}

export default ToDoListItem;

//
//
//
//

// import React from 'react';

// import FormToDo from '../FormToDo/FormToDo';

// const ToDoListItem = ({ id, rools, title, textToDo, deleteItem }) => {
//   const deleteToDo = () => {
//     deleteItem(id);
//   };

//   return (
//     <li>
//       <h3>{title}</h3>
//       <p>{textToDo}</p>
//       <span> Согласен: {rools ? 'Yes' : 'NO'}</span>

//       <button onClick={() => {}} type="button">
//         Edit
//       </button>

//       <button onClick={deleteToDo} type="button">
//         Delete
//       </button>
//     </li>
//   );
// };

// export default ToDoListItem;
