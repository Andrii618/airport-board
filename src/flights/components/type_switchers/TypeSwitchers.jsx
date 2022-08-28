import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi';
import PropTypes from 'prop-types';

import './typeSwitchers.scss';

const TypeSwitchers = ({ searchUrl }) => (
  <div className="type-switchers">
    <NavLink
      to={`/departures${searchUrl}`}
      className="type-switchers__link"
      activeClassName="active"
    >
      <GiAirplaneDeparture className="type-switchers__link-icon" />
      Departures
    </NavLink>
    <NavLink
      to={`/arrivals${searchUrl}`}
      className="type-switchers__link type-switchers__link_arrivals"
      activeClassName="active"
    >
      <GiAirplaneArrival className="type-switchers__link-icon" />
      Arrivals
    </NavLink>
  </div>
);

TypeSwitchers.propTypes = {
  searchUrl: PropTypes.string.isRequired,
};

export default TypeSwitchers;
