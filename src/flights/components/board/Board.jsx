import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import SearchFlight from '../search/SearchFlight';
import TypeSwitchers from '../type_switchers/TypeSwitchers';

import './board.scss';

const Board = () => (
  <main className="board">
    <Router>
      <SearchFlight />
      <TypeSwitchers />
      <Route exact path="/">
        <Redirect to="/departures" />
      </Route>
      <Route path="/:flightType"></Route>
    </Router>
  </main>
);

export default Board;
