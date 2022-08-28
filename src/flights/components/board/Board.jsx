import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

import * as flightsActions from '../../flights.actions';
import flightsDataSelector from '../../flights.selectors';
import history from '../../../history';

import { getSearchParams, createSearchParams } from '../../../utils/searchParams';
import { formatDate, getCurrentDate } from '../../../utils/dates';

import SearchFlight from '../search/SearchFlight';
import TypeSwitchers from '../type_switchers/TypeSwitchers';
import DatePicker from '../date_picker/DatePicker';
import Table from '../table/Table';

import './board.scss';

const Board = ({ flightsData, getFlightsData }) => {
  const { pathname, search: searchUrl } = useLocation();

  const { search, date } = getSearchParams(searchUrl);

  const [dateValue, setDateValue] = useState(formatDate(date !== null ? date : getCurrentDate()));

  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    getFlightsData(formatDate(dateValue));
  }, [dateValue]);

  useEffect(() => {
    const searchData = { date: formatDate(dateValue) };

    if (searchText) {
      searchData.search = searchText;
    }

    history.push(`${pathname}?${createSearchParams(searchData)}`);
  }, [searchText]);

  return (
    <main className="board">
      <SearchFlight pathname={pathname} searchText={searchText} setSearchText={setSearchText} />
      <TypeSwitchers searchUrl={searchUrl} />
      <DatePicker dateValue={dateValue} setDateValue={setDateValue} />
      <Route exact path="/">
        <Redirect to={`/departures?date=${getCurrentDate()}`} />
      </Route>
      <Route path="/:flightType">
        <Table flightsData={flightsData} searchText={searchText} />
      </Route>
    </main>
  );
};

const mapState = state => ({ flightsData: flightsDataSelector(state) });

const mapDispatch = {
  getFlightsData: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(Board);
