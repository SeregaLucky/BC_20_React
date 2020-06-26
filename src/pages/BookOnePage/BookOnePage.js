import React, { Component } from 'react';
import { getBookByTitle } from '../../servises/api';

class BookOnePage extends Component {
  state = {
    numFound: 0,
    error: null,
  };

  componentDidMount() {
    console.log(this.props);
    const { title } = this.props.match.params;

    getBookByTitle(title)
      .then(data => {
        // console.log(data);
        this.setState({ numFound: data.numFound });
        // this.props.history.replace({ ...this.props.location });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { numFound } = this.state;

    return (
      <>
        <h2>BookOnePage</h2>
        <h3>{numFound}</h3>
      </>
    );
  }
}

export default BookOnePage;
