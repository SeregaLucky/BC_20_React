import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

class PositionList extends Component {
  static Consumer = Consumer;

  changeFlex = () => this.setState({ position: 'flex' });
  changeTable = () => this.setState({ position: 'block' });

  state = {
    position: 'table',

    changeFlex: this.changeFlex,
    changeTable: this.changeTable,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default PositionList;

// Math.random()

//
//

// class Math {
//   static random = ()=>{}
//   }

// new Math

//
//

// function Fn1() {
//   //
// }
// console.log(Fn1);

// Fn1.aaa = 666;

// const fn = new Fn1();
// console.log(fn);

//
//

// class Aaa {
//   constructor() {
//     this.text = 10;
//   }
//   // text = 10;
// }

// const aaa = new Aaa();
// console.log(aaa);
