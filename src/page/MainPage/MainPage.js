import React, { Component } from 'react';
import shortid from 'shortid';

import ToDoList from '../../components/ToDoList/ToDoList';
import FormToDo from '../../components/FormToDo/FormToDo';

class MainMage extends Component {
  state = {
    titleForm: 'Your TODO=)',

    items: [
      {
        id: 1,
        title: 'Title 1',
        textToDo: 'To by freedom',
        rools: false,
      },
      {
        id: 2,
        title: 'Title 222',
        textToDo: 'To by freedom NOW',
        rools: true,
      },
    ],
  };

  // deleteItem = id => {
  //   // console.log('id', id);
  //   this.setState(prevState => {
  //     const newArr = prevState.items.filter(item => item.id !== id);

  //     return { items: newArr };
  //   });
  // };

  // deleteItem = id => {
  //   this.setState(
  //     prevState => ({
  //       items: prevState.items.filter(item => item.id !== id),
  //     }),
  //     () => {
  //       console.log(this.state);
  //     },
  //   );
  // };

  // deleteItem = id => {
  //   this.setState(
  //     (prevState, prevProps) => {
  //       console.log('prevProps', prevProps);
  //       return {
  //         items: prevState.items.filter(item => item.id !== id),
  //       };
  //     },
  //     () => {
  //       console.log(this.state);
  //     },
  //   );
  // };

  addToDo = ({ title, textToDo, rools }) => {
    const todoNew = {
      id: shortid.generate(),
      title,
      textToDo,
      rools,
    };

    this.setState(prevState => ({ items: [...prevState.items, todoNew] }));
  };

  changeToDo = (id, todoUpdateObj) => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, todoUpdateObj } : item,
      ),
    }));
  };

  deleteItem = id =>
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));

  render() {
    const { titleForm, items } = this.state;

    return (
      <>
        <FormToDo titleForm={titleForm} addToDo={this.addToDo} />

        <ToDoList
          listItems={items}
          changeToDo={this.changeToDo}
          deleteItem={this.deleteItem}
        />
      </>
    );
  }
}

export default MainMage;
