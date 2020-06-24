import React from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';

const MainPage = props => {
  console.log('MainPage', props);

  return (
    <main>
      <h2>MainPage</h2>

      {/* <MainInfo {...props} /> */}
      <MainInfo />
    </main>
  );
};

export default MainPage;
