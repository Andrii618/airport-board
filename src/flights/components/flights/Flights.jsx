import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SearchFlight from '../search_flight/SearchFlight';

import './flights.scss';

const Flights = () => (
  <main className="flights">
    <SearchFlight />
    <BrowserRouter></BrowserRouter>
  </main>
);

export default Flights;
