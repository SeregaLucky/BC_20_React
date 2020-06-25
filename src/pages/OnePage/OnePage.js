import React from 'react';
import routes from '../../routes';

const OnePage = ({ history, location }) => {
  console.log('OnePage location', location);
  const goBack = () => {
    console.log('goBack');
    // console.log('history', history);
    // console.log('OnePage location', location);

    if (location.state) {
      history.push({
        ...location.state.from,
      });

      return;
    }

    history.push(routes.CONTACT_PAGE);
  };

  return (
    <main>
      <h2>OnePage</h2>
      <button onClick={goBack}>Go back</button>
    </main>
  );
};

export default OnePage;
