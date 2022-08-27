import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineCalendar } from 'react-icons/ai';

import * as flightsActions from '../../flights.actions';

import history from '../../history';

import { getSearchParams, createSearchParams } from '../../../utils/searchParams';
import { formatDate, getCurrentDate } from '../../../utils/dates';

import './datePicker.scss';

const DatePicker = ({ getFlightsData }) => {
  const { pathname, search: searchUrl } = useLocation();

  const { search, date } = getSearchParams(searchUrl);

  const [dateValue, setDateValue] = useState(formatDate(date !== null ? date : getCurrentDate()));

  useEffect(() => {
    getFlightsData(formatDate(dateValue));
  }, [dateValue]);

  const handleSetNewData = value => {
    setDateValue(value);

    const searchData = { date: formatDate(value) };

    if (search) {
      searchData.search = search;
    }

    history.push(`${pathname}?${createSearchParams(searchData)}`);
  };

  return (
    <div className="date-picker">
      <label htmlFor="date" className="date-picker__wrapper">
        <AiOutlineCalendar className="date-picker__icon" />
        <input
          type="date"
          className="date-picker__input"
          id="date"
          value={dateValue}
          onChange={e => handleSetNewData(e.target.value)}
        />
      </label>
    </div>
  );
};

const mapDispatch = {
  getFlightsData: flightsActions.getFlightsData,
};

export default connect(null, mapDispatch)(DatePicker);