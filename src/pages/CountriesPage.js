import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IconContext } from 'react-icons';
import { FaGlobeEurope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { getCountries, getEuropeData } from '../redux/CountriesReducer';

const CountryCard = () => {
  const countries = useSelector((state) => state.data.countries);
  const europe = useSelector((state) => state.data.europe);
  const [fetchedData, setFetchedData] = useState(countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  useEffect(() => {
    dispatch(getEuropeData());
  }, []);

  useEffect(() => {
    if (fetchedData.length < 0) {
      fetchedData.sort((a, b) => b.cases - a.cases);
    }
    setFetchedData(() => countries);
  }, [countries]);

  const toStr = (num) => num.toLocaleString();

  return (
    <div className='body'>
      <Navbar value='Home' />
      <header className='page-heading'>
        <div className='europe-img'>
          <IconContext.Provider value={{ className: 'europe-img' }}>
            <div>
              <FaGlobeEurope />
            </div>
          </IconContext.Provider>
        </div>
        <div className='europe-img-desc'>
          <div><b>EUROPE</b></div>
          <div>{toStr(europe)}</div>
        </div>
      </header>
        <div className='heading-p'>
          <p>STATS BY CONTINENT</p>
          <div className='filter-btns'>
            <button className='buttonn' onClick = {() => setFetchedData([].concat(fetchedData).sort((a, b) => b.cases - a.cases))}>
              Highest cases</button>
            <button className='buttonn' onClick = {() => setFetchedData([].concat(fetchedData).sort((a, b) => a.cases - b.cases))}>
            Lowest cases</button>
          </div>
        </div>
        <div className='country-details'>
          {countries && fetchedData.map((country) => (
            <div className='country-data' key={uuidv4()}>
            <Link to={`/${country.country}`}>
              <div className='country-flag'>
                <img src={country.countryInfo.flag} alt='logo-img' className='flag-img' />
              </div>
              <div className='country-cases'>
                <p className='country'>
                  {country.country}
                </p>
                <div className=''>{toStr(country.cases)}</div>
              </div>
            </Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CountryCard;