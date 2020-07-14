import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoOperations from '../../redux/ToDo/ToDoOperations';
import {
  getListTodo,
  isLoading,
  // getError,
} from '../../redux/ToDo/ToDoSelectors';

import ToDoPage from './ToDoPage';
import Loader from '../../components/Loader/Loader';

class ToDoPageContainer extends Component {
  componentDidMount() {
    const { getAllToto } = this.props;
    getAllToto();
  }

  render() {
    const { listTodo, isLoading, error } = this.props;
    // console.log(isLoading);
    return (
      <>
        {isLoading && <Loader />}
        <ToDoPage listTodo={listTodo} />

        {error && <p>ERRORRRRRR</p>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    listTodo: getListTodo(state),
    isLoading: isLoading(state),
    error: state.todoRoot.todoError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllToto: () => dispatch(ToDoOperations.getAllToDoOperations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoPageContainer);
