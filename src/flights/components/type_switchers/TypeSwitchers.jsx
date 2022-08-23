import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';

import './typeSwitchers.scss';

const TypeSwitchers = () => (
  <div className="type-switchers">
    <NavLink to="/departures" className="type-switchers__link" activeClassName="active">
      <GiAirplaneDeparture className="type-switchers__link-icon" />
      Departures
    </NavLink>
    <NavLink
      to="/arrivals"
      className="type-switchers__link type-switchers__link_arrivals"
      activeClassName="active"
    >
      <GiAirplaneArrival className="type-switchers__link-icon" />
      Arrivals
    </NavLink>
  </div>
);

export default TypeSwitchers;
