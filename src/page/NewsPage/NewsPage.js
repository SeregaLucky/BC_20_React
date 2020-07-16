import React, { Component } from 'react';
import { getNews } from '../../servises/api';

class NewsPage extends Component {
  state = {
    listNews: [],
  };

  componentDidMount() {
    getNews()
      .then(data => {
        console.log(data.articles);
        this.setState({ listNews: data.articles });
      })
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    console.log('Unmount');
  }

  render() {
    const { listNews } = this.state;

    return (
      <ul>
        {listNews.map(item => (
          <li key={item.title}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    );
  }
}

export default NewsPage;
