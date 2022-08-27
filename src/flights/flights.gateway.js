const baseUrl = 'https://api.iev.aero/api/flights';

const requestFlightsData = date =>
  fetch(`${baseUrl}/${date}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });

export default requestFlightsData;
