import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inc, dec } from '../../redux/counter/counterReducer';

class Counter extends Component {
  // state = { value: 0 };

  // dec = () => this.setState(prevState => ({ value: prevState.value - 1 }));
  // inc = () => this.setState(prevState => ({ value: prevState.value + 1 }));

  render() {
    // const { value } = this.state;
    console.log(this.props);
    const { value, dec, inc } = this.props;

    return (
      <>
        <h2>Counter</h2>
        <span style={{ fontSize: '24px' }}>{value}</span>

        <br />
        <button type="button" onClick={dec}>
          Dec
        </button>
        <button type="button" onClick={inc}>
          Inc
        </button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counterReducer.counter,
});

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(inc()),
  dec: () => dispatch(dec()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(null, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps)(Counter);
