import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
// import MainPage from '../pages/MainPage/MainPage';
// import BookPage from '../pages/BookPage/BookPage';
// import BookOnePage from '../pages/BookOnePage/BookOnePage';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const BookPage = lazy(() => import('../pages/BookPage/BookPage'));
const BookOnePage = lazy(() => import('../pages/BookOnePage/BookOnePage'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={MainPage} />
          <Route path="/books/:title" component={BookOnePage} />
          <Route path="/books" component={BookPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
