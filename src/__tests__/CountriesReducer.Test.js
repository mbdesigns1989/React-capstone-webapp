import reducer, {
  getCountries,
  getEuropeData,
  getCountryData,
  GET_COUNTRIES,
  GET_COUNTRY_DATA,
  GET_EUROPE,
} from '../redux/CountriesReducer';
import data from '../mocks/mocks';

describe('getCountries returns specific values', () => {
  test('getCountries should return a truthy value', () => {
    expect(getCountries()).toBeTruthy();
  });
  test('get countries return an array of country objects', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});

describe('getCountryData returns specific values', () => {
  test('getCountryData return a truthy value', () => {
    expect(getCountryData()).toBeTruthy();
  });
  test('getEurope return an object', () => {
    expect(getCountryData()).toBeInstanceOf(Object);
  });
});

describe('getEurope returns specific values', () => {
  test('getEurope should return a truthy value', () => {
    expect(getEuropeData()).toBeTruthy();
  });
  test('getEurope should not contain data', () => {
    expect(getEuropeData()).not.toContain(data);
  });
});

describe('This is a reducer', () => {
  test('Retrieve data from API and change state', () => {
    const data = [
      { country: 'BOSNIA', cases: 403443 },
    ];

    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };

    const initialState = {
      countries: [],
    };

    const newState = reducer(initialState, action);
    const { country, cases } = newState.countries[0];

    expect(country).toBe('BOSNIA');
    expect(cases).toEqual(403443);
  });

  test('should return specific values', () => {
    const action = {
      type: GET_COUNTRIES,
    };
    expect(reducer({}, action)).not.toBeUndefined();
  });

  test('Retrieve data fom API and change state', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { active } = newState.countries[0].countryData;
    expect(active).toEqual(7985);
  });
  test('Retrieve data fom API and change state', () => {
    const action = {
      type: GET_COUNTRIES,
      newData: data,
    };
    const newState = reducer({}, action);
    const { critical } = newState.countries[0].countryData;
    expect(critical).toEqual(0);
  });
  test('The state should be truthy after action GET_COUNTRY_DATA', () => {
    const action = {
      type: GET_COUNTRY_DATA,
    };
    expect(reducer({}, action)).toBeTruthy();
  });
  test('The state should be truthy after action GET_EUROPE', () => {
    const initialState = {
      europe: null,
    };
    const action = {
      type: GET_EUROPE,
      europe: 'Europe data',
    };
    const newState = reducer(initialState, action);
    expect(newState).toBeTruthy();
  });
});
