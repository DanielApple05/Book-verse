import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between p-4 border-b border-gray-500 w-full fixed z-50 bg-white '>
        <div className='flex items-center p-3 text-2xl font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E]' />
          <p> BookVerse </p>
        </div>
        <form className=' border border-gray-300 rounded-xl p-1 relative w-5/12 flex items-center'>
         <input type="text" className='outline-none w-full ml-2'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1A1A2E] absolute right-3' />
        </form>
        <div>
           <FontAwesomeIcon icon={faCircleUser} className='text-[#1A1A2E] text-2xl' />
        </div>
      </div>
    </>
  );
}

export default Header;
