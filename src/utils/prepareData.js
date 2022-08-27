import { createTime } from './dates';

const prepareFlightsData = (flights, flightType, filterText) => {
  if (!flights) {
    return null;
  }

  const slicedFlights = flightType === 'departures' ? flights.departure : flights.arrival;

  const flightsData = slicedFlights.map(flight => {
    const localTime = createTime(flight.timeDepShedule || flight.timeArrShedule);
    const timeStatus = createTime(flight.timeTakeofFact);

    const { name: airline, logoSmallName: airlineLogo } = flight.airline.en;

    let status;
    switch (flight.status) {
      case 'DP':
        status = `Departured at ${timeStatus}`;
        break;
      case 'LN':
        status = `Arrived at ${timeStatus}`;
        break;
      case 'FR':
        status = 'In the sky';
        break;
      case 'ON':
        status = 'On time';
        break;
      case 'GC':
        status = 'Landed';
        break;
      case 'DL':
        status = 'Late';
        break;
      case 'CX':
        status = 'Registration';
        break;
      case 'BD':
        status = 'Landing';
        break;
      default:
        status = flight.status;
    }

    return {
      id: flight.ID,
      terminal: flight.term,
      localTime,
      airportName: flight['airportToID.city_en'] || flight['airportFromID.city_en'],
      status,
      airlineLogo,
      airline,
      flightNumber: flight.codeShareData[0].codeShare,
    };
  });

  return filterText
    ? flightsData.filter(
        ({ flightNumber, airportName, airline }) =>
          flightNumber.includes(filterText) ||
          airportName.toLowerCase().includes(filterText.toLowerCase()) ||
          airline.toLowerCase().includes(filterText.toLowerCase()),
      )
    : flightsData;
};

export default prepareFlightsData;
