import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import './datePicker.scss';

const DatePicker = ({ dateValue, setDateValue }) => (
  <div className="date-picker">
    <AiOutlineCalendar className="date-picker__icon" />
    <input
      className="date-picker__input"
      type="date"
      value={dateValue}
      onChange={e => setDateValue(e.target.value)}
    />
  </div>
);

export default DatePicker;
