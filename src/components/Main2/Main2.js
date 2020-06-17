import React, { Component } from "react";
import Button from "../Button/Button";

class Main2 extends Component {
  state = {
    value: 0,
  };

  inc = (e) => {
    this.setState({ value: this.state.value + 1 });

    // console.log(e);
    // console.log("inc");
  };

  dec = (e) => {
    this.setState({ value: this.state.value - 1 });

    // console.log(e);
    // console.log("dec");
  };

  render() {
    // console.log("RENDER");
    const { value } = this.state;

    return (
      <div>
        <Button text="Inc" type="button" changeValueSpan={this.inc} />
        <Button text="Dec" type="button" changeValueSpan={this.dec} />

        <span>{value}</span>
      </div>
    );
  }
}

export default Main2;
