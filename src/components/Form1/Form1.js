import React, { Component } from 'react';
import shortid from 'shortid';

class Form1 extends Component {
  state = {
    firstName: '',
    rools: false,
    radio1: null,
  };

  objIdInput = {
    firstNameInputId: shortid.generate(),
  };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    console.log(checked);

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  // handleChange = ({ target: { name, value, type, checked } }) =>
  //   this.setState({ [name]: type === 'checkbox' ? checked : value });

  handleSubmit = e => {
    e.preventDefault();

    const { firstName } = this.state;

    const objFrom = {
      firstName,
    };

    console.log(objFrom);
    this.resetform();
  };

  resetform = () => {
    this.setState({
      firstName: '',
    });
  };

  render() {
    // console.log(111);
    const { firstName, rools, radio1 } = this.state;
    const { firstNameInputId } = this.objIdInput;

    return (
      <form style={{ padding: '4px' }} onSubmit={this.handleSubmit}>
        <label htmlFor={firstNameInputId}>
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="FirstName..."
            onChange={this.handleChange}
            id={firstNameInputId}
          />
        </label>

        <input
          type="checkbox"
          name="rools"
          checked={rools}
          onChange={this.handleChange}
        />

        <input
          type="radio"
          name="radio1"
          value={'yes'}
          checked={radio1 === 'yes'}
          onChange={this.handleChange}
        />
        <input
          type="radio"
          name="radio1"
          value={'no'}
          checked={radio1 === 'no'}
          onChange={this.handleChange}
        />

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form1;
