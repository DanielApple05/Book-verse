import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
       <Link to='/home' className='flex items-center font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='dark:text-white  text-[#1A1A2E] text-xl ' />
          <p> BookVerse </p>
        </Link>
    </>
  );
}

export default Logo;
