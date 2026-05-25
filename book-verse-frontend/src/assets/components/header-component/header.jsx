import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Search from '../search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between p-4 border-b xl:text-2xl text-sm  border-gray-200 w-full fixed top-0 z-50 bg-white '>
        <Link to='/home' className='flex items-center font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E] text-xl ' />
          <p> BookVerse </p>
        </Link>
        <div className='xl:flex hidden w-5/6 justify-center'> <Search /></div>
        <FontAwesomeIcon icon={faCircleUser} className='text-[#1A1A2E] text-2xl ' />
      </div>
    </>
  );
}

export default Header;
