import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Search from '../search';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const token = localStorage.getItem('token');
  const isValidToken = token && token !== 'undefined' && token.split('.').length === 3;
  const user = isValidToken ? jwtDecode(token) : null;
  const firstLetter = user?.username?.charAt(0).toUpperCase();

  return (
    <>
      <div className='flex items-center justify-between p-4 border-b xl:text-2xl text-sm  border-gray-200 w-full fixed top-0 z-50 bg-white '>
        <Logo />
        <div className='xl:flex hidden w-5/6 justify-center'> <Search /></div>
        <div className='flex items-center space-x-2'>
      { user ? (<span className='font-semibold'>{firstLetter}</span>) : (<Link to='/login'><FontAwesomeIcon icon={faCircleUser} className='text-[#1A1A2E] text-2xl ' /></Link>) }
         
        </div>
      </div>
    </>
  );
}

export default Header;
