import React from 'react';
import SearchForm from '../search_form/SearchForm';

import './searchFlight.scss';

const SearchFlight = () => (
  <div className="search-flight">
    <h1 className="search-flight__title">Search flight</h1>
    <SearchForm />
  </div>
);

export default SearchFlight;
