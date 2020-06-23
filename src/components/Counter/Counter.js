import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 };

  componentDidMount() {
    console.log('componentDidMOUNT');
    window.addEventListener('keydown', this.keyShow);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(this.state.value);
    console.log(prevState.value);
  }

  componentWillUnmount() {
    console.log('componentWillUNPOUNT');
    window.removeEventListener('keydown', this.keyShow);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // return false;
  }

  keyShow = e => {
    console.log(e.key);
  };

  handleClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
    // console.log(this.state.value);
  };

  render() {
    console.log('RENDER');
    const { value } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Increment
        </button>
        {/* <button type="button" onClick={() => this.handleClick()}>
          Increment
        </button> */}
        <span>{value}</span>
      </div>
    );
  }
}

export default Counter;
