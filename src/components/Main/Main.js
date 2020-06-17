import React, { Component } from "react";

class Main extends Component {
  static bb = 20; // Лежит только на класе но не на экземляре

  static fn1() {} // Лежит только на класе но не на экземляре

  state = {
    value: 0,
  };

  a = 10;

  inc = (e) => {
    // this.state.value += 1; // ПЛОХО
    this.setState({ value: this.state.value + 1 });

    // console.log(e);
    // console.log("inc");
  };

  dec = (e) => {
    // this.state.value -= 1; // ПЛОХО
    console.log("DEC!!!");
    // this.setState({ value: this.state.value - 1 });
    // this.setState({ value: this.state.value - 1 });
    // this.setState({ value: this.state.value - 1 });

    this.setState((prevStat) => ({ value: prevStat.value - 1 }));
    this.setState((prevStat) => ({ value: prevStat.value - 1 }));
    this.setState((prevStat) => ({ value: prevStat.value - 1 }));

    // console.log(e);
    // console.log("dec");
  };

  render() {
    // console.log("RENDER");
    const { value } = this.state;

    return (
      <>
        <button onClick={this.inc} type="button">
          Inc
        </button>
        <button onClick={this.dec} type="button">
          Dec
        </button>

        <span>{value}</span>
      </>
    );
  }
}

export default Main;
