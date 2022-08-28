import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ImSearch } from 'react-icons/im';

import './searchFlight.scss';

const SearchFlight = ({ pathname, searchText, setSearchText }) => {
  const [inputValue, setInputValue] = useState(searchText || '');

  useEffect(() => {
    setInputValue(searchText || '');
  }, [pathname]);

  return (
    <div className="search-flight">
      <h1 className="search-flight__title">Search flight</h1>
      <form
        className="search-form"
        onSubmit={e => {
          e.preventDefault();
          setSearchText(inputValue);
        }}
      >
        <ImSearch className="search-form__icon" />
        <input
          type="text"
          className="search-form__input"
          placeholder="Airline, destination or flight #"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" className="search-form__submit-btn">
          Search
        </button>
      </form>
    </div>
  );
};

SearchFlight.propTypes = {
  pathname: PropTypes.string.isRequired,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func.isRequired,
};

SearchFlight.defaultProps = {
  searchText: '',
};

export default SearchFlight;
