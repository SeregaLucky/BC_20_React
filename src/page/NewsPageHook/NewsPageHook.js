import React, { useState, useEffect } from 'react';
import { getNews } from '../../servises/api';

const NewsPageHook = () => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    console.log(111);
    getNews()
      .then(data => setListNews(data.articles))
      .catch(err => console.log(err));

    return () => {
      // Очистка
      console.log('Тут делаем очистку');
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
