import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './Form';

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

  handleSubmit = e => {
    e.preventDefault();

    const { firstName } = this.state;

    const objFrom = {
      firstName,
    };

    console.log(objFrom);
    this.resetform();
  };

  // resetform = () => {
  //   this.setState({
  //     firstName: '',
  //   });
  // };

  resetform = () => this.setState({ firstName: '' });

  render() {
    // console.log(111);
    const { firstName, rools, radio1 } = this.state;
    const { firstNameInputId } = this.objIdInput;

    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        rools={rools}
        radio1={radio1}
        firstNameInputId={firstNameInputId}
      />
    );
  }
}

export default Form1;
