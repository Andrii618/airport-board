import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import flightsDataSelector from '../../flights.selectors';
import prepareFlightsData from '../../../utils/prepareData';
import { getSearchParams } from '../../../utils/searchParams';

import './table.scss';
import TableItem from '../table_item/TableItem';

const Table = ({ flightsData }) => {
  const [flightsListToRender, setFlightsListToRender] = useState([]);

  const { search } = useLocation();

  const { flightType } = useParams();

  const { search: searchText } = getSearchParams(search);

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

const mapState = state => ({ flightsData: flightsDataSelector(state) });

export default connect(mapState)(Table);
