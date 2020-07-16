import React, { Component } from 'react';

class CounterPage extends Component {
  // constructor() {
  //   super();
  //   state = { value: 0 };
  //   inc = () => {};
  // }

  state = {
    value: 0,
    step: 1,
    age: 22,
    power: 33,
  };

  componentDidMount() {
    console.log('MOUNT');
  }

  componentDidUpdate() {
    console.log('UPDATE');
  }

  componentWillUnmount() {
    console.log('WillUNMOUNT');
  }

  inc = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + this.state.step,
      };
    });
    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + this.state.step,
    //   };
    // });
    // this.setState({ value: this.state.value + this.state.step });
    // this.setState({ value: this.state.value + this.state.step });
  };

  dec = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - this.state.step,
      };
    });
  };

  render() {
    console.log('RENDER CounterPage');

    return (
      <div>
        <span>{this.state.value}</span>
        <br />

        <button type="button" onClick={this.dec}>
          Dec -
        </button>
        <button type="button" onClick={this.inc}>
          Inc +
        </button>
      </div>
    );
  }
}

export default CounterPage;
