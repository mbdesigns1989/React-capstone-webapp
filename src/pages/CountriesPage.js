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
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getEuropeData());
  }, [dispatch]);

  useEffect(() => {
    setFetchedData(countries);
  }, [countries]);

  const toStr = (num) => num.toLocaleString();

  const sortCountries = (order) => {
    const sortedData = [...fetchedData].sort((a, b) => (
      order === 'asc' ? a.cases - b.cases : b.cases - a.cases
    ));
    setFetchedData(sortedData);
  };

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
        <div className='order-btns'>
          <button className='order-btn' onClick={() => sortCountries('desc')}>
            Highest cases
          </button>
          <button className='order-btn' onClick={() => sortCountries('asc')}>
            Lowest cases
          </button>
        </div>
      </div>
      <div className='country-details'>
        {fetchedData.map((country) => (
          <div className='country-data' key={uuidv4()}>
            <Link to={`/${country.country}`} className='country-flag'>
              <img src={country.countryInfo.flag} alt='logo-img' className='flag-img' />
              <div className='country-cases'>
                <p className='country'>{country.country}</p>
                <div>{toStr(country.cases)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
