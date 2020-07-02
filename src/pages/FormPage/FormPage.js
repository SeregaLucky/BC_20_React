import React, { Component } from 'react';
import shortid from 'shortid';

import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import TodoList from '../../components/TodoList/TodoList';
import Modal from '../../components/Modal/Modal';

import ContextPositionListTodo from '../../context/contextPositionListTodo';

class FormPage extends Component {
  state = {
    listTodo: [
      {
        id: 1,
        title: 'Title 1',
        todo: 'Todo 1',
      },
      {
        id: 2,
        title: 'Title 22',
        todo: 'Todo 22',
      },
    ],

    isActiveModal: false,
  };

  addTodo = (title, todo) => {
    const newTodo = {
      id: shortid.generate(),
      title,
      todo,
    };

    this.setState(prevState => ({
      listTodo: [...prevState.listTodo, newTodo],
    }));
  };

  openModal = () => this.setState({ isActiveModal: true });
  closeModal = () => this.setState({ isActiveModal: false });

  render() {
    const { listTodo, isActiveModal } = this.state;

    return (
      <>
        <Form addTodo={this.addTodo} />

        <ContextPositionListTodo.Consumer>
          {state => (
            <>
              <Button text="Table" changePosition={state.changeTable} />
              <Button text="Flex" changePosition={state.changeFlex} />
            </>
          )}
        </ContextPositionListTodo.Consumer>

        <TodoList listTodo={listTodo} openModal={this.openModal} />

        {isActiveModal && <Modal closeModal={this.closeModal} />}
      </>
    );
  }
}

export default FormPage;
