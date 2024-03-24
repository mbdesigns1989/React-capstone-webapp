import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getCountryData } from '../redux/CountriesReducer';

const CardDescription = (props) => {
  const { country } = props;
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.data.countryData);

  useEffect(() => {
    dispatch(getCountryData(country));
  }, [country, dispatch]);

  return (
    <div className='body details-page'>
      <Navbar value='Details' />
      <header className='details-heading'>
        <div className='details-heading-data'>
          <div className='details-heading-data-t'>{country}</div>
          <p className='details-heading-data-tc'>{countryStats.totalcases}</p>
        </div>
      </header>
      <p className='middle'>STATS BY COUNTRY</p>
      <ul className='details-div'>
        {Object.entries(countryStats).map(([key, value]) => (
          <li key={key} className='details-div-li'>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDescription;
