import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <>
      <div className='flex justify-between p-5 border-b border-gray-200 fixed z-50 w-full bg-white'>
        <div className='flex items-center font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E]' />
          <p> BookVerse </p>
        </div>
        <Link to='/signin' className='cursor-pointer p-2 rounded-xl shadow-2xl bg-amber-100 hover:text-white hover:bg-[#1B1F3B]'>
           Sign in 
        </Link>
      </div>
    </>
  );
}

export default Header;
