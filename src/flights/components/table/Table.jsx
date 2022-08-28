import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import prepareFlightsData from '../../../utils/prepareData';

import TableItem from '../table_item/TableItem';

import './table.scss';

const Table = ({ flightsData, searchText }) => {
  const [flightsListToRender, setFlightsListToRender] = useState([]);

  const { flightType } = useParams();

  useEffect(() => {
    setFlightsListToRender(prepareFlightsData(flightsData, flightType, searchText));
  }, [searchText, flightsData, flightType]);

  if (!flightsListToRender || flightsListToRender.length === 0) {
    return <div className="nothing-found">Nothing Found</div>;
  }

  return (
    <div className="flights-table">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {flightsListToRender.map(flight => (
            <TableItem key={flight.id} flightInfo={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  flightsData: PropTypes.object,
  searchText: PropTypes.string,
};

Table.defaultProps = {
  flightsData: undefined,
  searchText: '',
};

export default Table;
