import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllToDo, controller } from '../../servises/api';

class ToDoPage extends Component {
  state = { listTodo: null };

  componentDidMount() {
    getAllToDo()
      .then(listTodo => {
        // console.log(listTodo);
        this.setState({ listTodo: listTodo });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentWillMount() {
    controller.abort();
  }

  render() {
    // console.log('RENDER ToDoPage');
    // console.log(this.props);
    const { match, location } = this.props;

    const { listTodo } = this.state;
    // console.log('listTodo', listTodo);

    return (
      listTodo && (
        <ul>
          {listTodo.map(({ id, title }) => (
            <li key={id}>
              {/* <Link to={`${match.url}/${id}`}>
                <h3>{title}</h3>
              </Link> */}

              <Link
                to={{
                  pathname: `${match.url}/${id}`,
                  state: { from: location },
                }}
              >
                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default ToDoPage;
