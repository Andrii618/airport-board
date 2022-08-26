/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';

import './typeSwitchers.scss';

const TypeSwitchers = () => {
  const { search } = useLocation();

  return (
    <div className="type-switchers">
      <NavLink
        to={`/departures${search}`}
        className="type-switchers__link"
        activeClassName="active"
      >
        <GiAirplaneDeparture className="type-switchers__link-icon" />
        Departures
      </NavLink>
      <NavLink
        to={`/arrivals${search}`}
        className="type-switchers__link type-switchers__link_arrivals"
        activeClassName="active"
      >
        <GiAirplaneArrival className="type-switchers__link-icon" />
        Arrivals
      </NavLink>
    </div>
  );
};

export default TypeSwitchers;
