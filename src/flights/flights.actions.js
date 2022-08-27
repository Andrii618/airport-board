import SET_FLIGHTS_DATA from './flights.actionTypes';
import requestFlightsData from './flights.gateway';

const setFlightsData = flightsData => ({ type: SET_FLIGHTS_DATA, payload: { flightsData } });

export const getFlightsData = date => dispatch => {
  requestFlightsData(date).then(response => {
    dispatch(setFlightsData(response));
  });
};
