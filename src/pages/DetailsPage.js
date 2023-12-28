import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getCountryData } from '../redux/CountriesReducer';

const DescriptionCard = (props) => {
  const { country } = props;
  const dispatch = useDispatch();
  const countryStats = useSelector((state) => state.data.countryData);

  useEffect(() => {
    dispatch(getCountryData(country));
  }, []);

  return (
    <div className='body details-page'>
      <Navbar value={'Details'}/>
      <header className='details-heading'>
        <div className='details-heading-data'>
          <div className='details-heading-data-t'>{country}</div>
          <p className='details-heading-data-tc'>{(countryStats.totalcases)}</p>
        </div>
      </header>
      <p className='middle'>STATS BY COUNTRY</p>
      <ul className='details-div'>
        <li className='details-div-li' ><span>Recovered</span> <span>{(countryStats.recovered)}</span></li>
        <li className='details-div-li' ><span>Active</span> <span>{(countryStats.active)}</span></li>
        <li className='details-div-li' ><span>Critical</span> <span>{(countryStats.critical)}</span></li>
        <li className='details-div-li' ><span>Tests</span> <span>{(countryStats.tests)}</span></li>
        <li className='details-div-li' ><span>Deaths</span> <span>{(countryStats.deaths)}</span></li>
      </ul>
    </div>
  );
};

export default DescriptionCard;