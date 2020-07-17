import React, { useState, useEffect } from 'react';
import { getNews, controller } from '../../servises/api';

const NewsPageHook = () => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    getNews()
      .then(data => setListNews(data.articles))
      .catch(err => console.error(err));

    return () => {
      console.log('Тут делаем очистку');
      controller.abort();
    };
  }, []);

  return (
    <ul>
      {listNews.map(item => (
        <li key={item.title}>
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default NewsPageHook;
