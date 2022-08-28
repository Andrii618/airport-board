import React from 'react';
import PropTypes from 'prop-types';

import './tableItem.scss';

const TableItem = ({ flightInfo }) => {
  const { terminal, flightNumber, airline, airlineLogo, airportName, localTime, status } =
    flightInfo;

  let terminalColor;

  switch (terminal) {
    case 'A':
      terminalColor = '#34e134';
      break;
    case 'D':
      terminalColor = '#1eb7ee';
      break;
    default:
      break;
  }

  return (
    <tr className="table__body-row">
      <td>
        <span
          className="terminal-icon"
          style={{ color: terminalColor, borderColor: terminalColor }}
        >
          {terminal}
        </span>
      </td>
      <td>{localTime}</td>
      <td>{airportName}</td>
      <td>{status}</td>
      <td>
        <div className="airline">
          <img className="airline__logo" src={airlineLogo} alt={airline} />
          {airline}
        </div>
      </td>
      <td>{flightNumber}</td>
    </tr>
  );
};

TableItem.propTypes = {
  flightInfo: PropTypes.object,
};

export default TableItem;
