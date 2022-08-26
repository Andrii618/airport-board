/* eslint-disable arrow-body-style */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getCurrentDate } from '../../../utils/dates';

import SearchFlight from '../search/SearchFlight';
import TypeSwitchers from '../type_switchers/TypeSwitchers';
import DatePicker from '../date_picker/DatePicker';
import Table from '../table/Table';

import './board.scss';

const Board = () => {
  return (
    <main className="board">
      <SearchFlight setSearchData />
      <TypeSwitchers />
      <DatePicker />
      <Route exact path="/">
        <Redirect to={`/departures?date=${getCurrentDate()}`} />
      </Route>
      <Route path="/:flightType">
        <Table />
      </Route>
    </main>
  );
};

export default Board;
