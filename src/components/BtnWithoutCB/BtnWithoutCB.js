import React, { Component } from "react";
import ButtonsAll from "../ButtonsAll/ButtonsAll";

const nameButtons = ["inc", "dec"];

class BtnWithoutCB extends Component {
  state = {
    inc: 0,
    dec: 0,
  };

  // handleClickButton = (e) => {
  //   // this.setState({ value: this.state.value + 1 });
  //   // console.log(e.target.textContent);
  //   console.log(e.target.name);
  //   // console.log("handleClickButton");
  // };

  handleClickButton = (nameBtn) => {
    console.log(nameBtn);

    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  render() {
    // console.log("RENDER");
    const { inc, dec } = this.state;

    return (
      <div>
        <ButtonsAll
          nameButtons={nameButtons}
          clickButton={this.handleClickButton}
        />

        <br />
        <span>{inc}</span>
        <br />
        <span>{dec}</span>
      </div>
    );
  }
}

export default BtnWithoutCB;
