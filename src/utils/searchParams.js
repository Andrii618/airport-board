export const getSearchParams = searchUrl => ({
  search: new URLSearchParams(searchUrl).get('search'),
  date: new URLSearchParams(searchUrl).get('date'),
});

export const createSearchParams = searchData => new URLSearchParams(searchData);
