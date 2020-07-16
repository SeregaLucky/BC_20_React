import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { getOneToDo } from '../../servises/api';
import ToDoInfo from '../../components/ToDoInfo';

class ToDoOnePage extends Component {
  state = {
    id: null,
    title: '',
    text: '',
  };

  componentDidMount() {
    const idToDo = this.props.match.params.idToDo;
    // console.log('idToDo', idToDo);

    getOneToDo(idToDo)
      .then(todo => {
        // console.log(todo);
        const { title, text } = todo;
        this.setState({
          title: title,
          text: text,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  goBack = () => {
    console.log('goBack');
    const prevLocation = this.props.location.state?.from;
    // const prevLocation =
    //   this.props.location.state && this.props.location.state.from;
    // console.log(prevLocation);

    if (prevLocation) {
      this.props.history.push(prevLocation);
      return;
    }

    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    const { match, location } = this.props;

    const { id, title, text } = this.state;

    return (
      <div>
        <button type="button" onClick={this.goBack}>
          Go BACK
        </button>

        <h2>ToDoOnePage</h2>

        <h3>{title}</h3>
        <p>{text}</p>

        {/* <Link to={`${match.url}/info`}>Show info</Link> */}
        <Link
          to={{
            pathname: `${match.url}/info`,
            state: { from: location.state.from },
            search: '?info=yes',
          }}
        >
          Show info
        </Link>

        <Route path={`${match.url}/info`} component={ToDoInfo} />
      </div>
    );
  }
}

export default ToDoOnePage;
