import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from './store';
import history from './history';

import Board from './flights/components/board/Board';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Board />
    </Router>
  </Provider>
);

export default App;
