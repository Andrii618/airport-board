import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import './datePicker.scss';

const DatePicker = () => {
  return (
    <div className="date-picker">
      <label htmlFor="date" className="date-picker__wrapper">
        <AiOutlineCalendar className="date-picker__icon" />
        <input type="date" className="date-picker__input" id="date" />
      </label>
    </div>
  );
};

export default DatePicker;
