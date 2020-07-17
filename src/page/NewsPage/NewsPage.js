import React, { Component } from 'react';
import { getNews, controller } from '../../servises/api';

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
      .catch(err => console.error(err));
  }

  componentWillUnmount() {
    console.log('Unmount');
    controller.abort();
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
