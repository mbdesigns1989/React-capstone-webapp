export const GET_COUNTRIES = 'countries/countries/GET_COUNTRIES';
export const GET_COUNTRY_DATA = 'countries/countries/GET_COUNTRY_DATA';
export const GET_EUROPE = 'countries/countries/GET_EUROPE';

const initialState = {
  countries: [],
  countryData: [],
  europe: [],
  continent: [],
  loggedIn: true,
};

export const getCountries = () => async (dispatch) => {
  const response = await fetch(
    'https://disease.sh/v3/covid-19/countries',
    { method: 'GET' },
  );
  const acData = await response.json();
  const newData = acData.filter((country) => country.continent === 'Europe');
  dispatch({ type: GET_COUNTRIES, newData });
};

export const getEuropeData = () => async (dispatch) => {
  const response = await fetch(
    'https://disease.sh/v3/covid-19/continents/europe?strict=true',
    { method: 'GET' },
  );
  const euroData = await response.json();
  const europe = euroData.cases;
  dispatch({ type: GET_EUROPE, europe });
};

export const getCountryData = (country) => async (dispatch) => {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    { method: 'GET' },
  );
  const newData = await response.json();
  const countryData = {
    id: newData.countryInfo.iso2,
    totalcases: newData.cases,
    recovered: newData.recovered,
    active: newData.active,
    critical: newData.critical,
    tests: newData.tests,
    deaths: newData.deaths,
  };
  dispatch({ type: GET_COUNTRY_DATA, countryData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.newData };

    case GET_EUROPE:
      return { ...state, europe: action.europe };

    case GET_COUNTRY_DATA:
      return { ...state, countryData: action.countryData };
    case 'RESET':

      return initialState;
    default:
      return state;
  }
};

export default reducer;
