import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useLocation } from 'react-router-dom';

import history from '../../history';
import { getSearchParams, createSearchParams } from '../../../utils/searchParams';

import './searchFlight.scss';

const SearchFlight = () => {
  const { pathname, search: searchUrl } = useLocation();

  const { search, date } = getSearchParams(searchUrl);

  const [searchText, setSearchText] = useState(search !== null ? search : '');

  useEffect(() => {
    setSearchText(search || '');
  }, [pathname]);

  const handleSearchFlight = e => {
    e.preventDefault();

    const searchData = { date };

    if (searchText !== '') {
      searchData.search = searchText;
    }

    history.push(`${pathname}?${createSearchParams(searchData)}`);
  };

  return (
    <div className="search-flight">
      <h1 className="search-flight__title">Search flight</h1>
      <form className="search-form" onSubmit={handleSearchFlight}>
        <ImSearch className="search-form__icon" />
        <input
          type="text"
          className="search-form__input"
          placeholder="Airline, destination or flight #"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button type="submit" className="search-form__submit-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlight;
