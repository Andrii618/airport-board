import React from 'react';
import { ImSearch } from 'react-icons/im';

import './searchFlight.scss';

const SearchFlight = () => (
  <div className="search-flight">
    <h1 className="search-flight__title">Search flight</h1>
    <form className="search-form">
      <ImSearch className="search-form__icon" />
      <input
        type="text"
        className="search-form__input"
        placeholder="Airline, destination or flight #"
      />
      <button type="submit" className="search-form__submit-btn">
        Search
      </button>
    </form>
  </div>
);

export default SearchFlight;
