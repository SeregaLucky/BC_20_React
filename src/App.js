import React from 'react';

import './App.css';

import users from './data/users.json';
import catsList from './data/data.json';

import UsersItem from './components/UsersItem/UsersItem';
import ListCats from './components/ListCats/ListCats';
import Border from './components/Border/Border';

const App = () => {
  // console.log(users);

  return (
    <>
      <h1>Title</h1>
      <span>{[111, 222, 333]}</span>

      <ListCats catsList={catsList} width={200} alt={'cat =))))'} />

      <Border>
        <ul>
          {users.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </Border>

      <ul>
        {users.map(item => {
          return <UsersItem key={item.id} title={'ITEM'} item={item} />;
        })}
      </ul>
    </>
  );
};

export default App;
