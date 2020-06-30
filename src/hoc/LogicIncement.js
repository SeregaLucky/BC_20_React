import React, { Component } from 'react';

class LogicIncement extends Component {
  state = {
    value: 1,
  };

  inc = () => this.setState(prevState => ({ value: prevState.value + 1 }));

  render() {
    const { value } = this.state;
    const { children } = this.props;

    return <>{children({ value, inc: this.inc })}</>;
  }
}

export default LogicIncement;
