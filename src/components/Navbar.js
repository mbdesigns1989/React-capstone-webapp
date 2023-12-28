/* eslint-disable consistent-return */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { MdOutlineKeyboardArrowLeft as ArrowLeft } from 'react-icons/md';

const Navbar = (props) => {
  const navTest = () => (props.value === 'Details' ? (<Link to='/'> <ArrowLeft /> </Link>) : null);
  return (
    <div className='nav'>
      <div>{navTest()}</div>
      <div className='nav-heading'>
        <Link to='/'>{'COVID-19 DATA'}</Link>
      </div>
      <div className='nav-icons'>
        <div className='nav-icon'><FiSettings /></div>
        <div className='nav-icon'><BiMicrophone /></div>
      </div>
    </div>
  );
};

export default Navbar;
