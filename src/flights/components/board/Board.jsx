/* eslint-disable arrow-body-style */

import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import history from '../../history';

import SearchFlight from '../search/SearchFlight';
import TypeSwitchers from '../type_switchers/TypeSwitchers';
import DatePicker from '../date_picker/DatePicker';
import Table from '../table/Table';

import './board.scss';

const Board = () => {
  return (
    <main className="board">
      <Router history={history}>
        <SearchFlight />
        <TypeSwitchers />
        <DatePicker />
        <Route exact path="/">
          <Redirect to={`/departures`} />
        </Route>
        <Route path="/:flightType">
          <Table />
        </Route>
      </Router>
    </main>
  );
};

export default Board;
