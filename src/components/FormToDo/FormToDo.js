import React, { Component } from 'react';
import styles from './FormToDo.module.css';

class FormToDo extends Component {
  state = {
    title: '',
    textToDo: '',
    rools: false,
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  // const  newState = {...this.state, ...{ [name]: value }}

  handleSubmit = e => {
    e.preventDefault();
    const { addToDo } = this.props;

    addToDo(this.state);
  };

  render() {
    const { title, textToDo, rools } = this.state;
    const { titleForm } = this.props;

    return (
      <>
        <h2 className={styles.titleForm}>{titleForm}</h2>

        <div className={styles.contForm}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <input
              value={title}
              onChange={this.handleChange}
              className={styles.inputTitle}
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

            <button type="submit">Add</button>
          </form>
        </div>
      </>
    );
  }
}

export default FormToDo;
