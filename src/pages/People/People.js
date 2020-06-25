import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getRandomNumbers } from '../../servises/api';

// import PeopleItem from '../../components/PeopleItem/PeopleItem';

class People extends Component {
  state = {
    arrID: null,
  };

  componentDidMount() {
    console.log('componentDidMount');

    getRandomNumbers()
      .then(arr => this.setState({ arrID: arr }))
      .catch(err => console.log(err));
  }

  render() {
    const { arrID } = this.state;

    return (
      arrID && (
        <ul>
          {/* {arrID.map((id, idx) => (
            <PeopleItem key={idx} id={id} />
          ))} */}

          {/* Рандобные цыфры выводим и при нажатии в конце путь будет с айдишником */}
          {arrID.map((id, idx) => (
            <Link
              key={idx}
              to={{
                pathname: `/people/${id}`,
              }}
            >
              {id}
            </Link>
          ))}
        </ul>
      )
    );
  }
}

export default People;
// PeopleItem
