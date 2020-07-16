import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CounterPage from '../page/CounterPage/CounterPage';
import CounterPageHook from '../page/CounterPageHook/CounterPageHook';

import NewsPage from '../page/NewsPage/NewsPage';
import NewsPageHook from '../page/NewsPageHook/NewsPageHook';

import ToDoPage from '../page/ToDoPage/ToDoPage';
import ToDoOnePage from '../page/ToDoOnePage/ToDoOnePage';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">CounterPage</Link>
            </li>
            <li>
              <Link to="/CounterPageHook">CounterPageHook</Link>
            </li>

            <li>
              <Link to="/News">News</Link>
            </li>
            <li>
              <Link to="/NewsHook">NewsHook</Link>
            </li>

            <li>
              <Link to="/ToDoPage">ToDoPage</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={CounterPage} />
        <Route path="/CounterPageHook" component={CounterPageHook} />

        <Route path="/News" component={NewsPage} />
        <Route path="/NewsHook" component={NewsPageHook} />

        <Route path="/ToDoPage/:idToDo" component={ToDoOnePage} />
        <Route path="/ToDoPage" component={ToDoPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
