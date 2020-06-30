import React, { Component } from 'react';
import FormRundomNumber from '../../components/Form/Form';
import WithBorder from '../../hoc/withBorder';

class FormPage extends Component {
  state = {
    inputValue: '',

    main: '',
  };

  handleChange = e => this.setState({ inputValue: e.target.value });

  setMain = inputValue => {
    // console.log(inputValue);
    this.setState({ main: inputValue });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <WithBorder>
        <FormRundomNumber
          inputValue={inputValue}
          onChange={this.handleChange}
          setMain={this.setMain}
        />
      </WithBorder>
    );
  }
}

export default FormPage;
