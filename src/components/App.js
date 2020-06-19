import React from 'react';

import MainMage from '../page/MainPage/MainPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <Header />

      <MainMage numberMy={666} />

      <Footer />
    </>
  );
};

export default App;

// const obj = {
//   id: 1,
//   title: 'Title 1',
//   textToDo: 'To by freedom',
// };
