import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between xl:p-4 p-2 border-b xl:text-2xl text-sm  border-gray-500 w-full fixed z-50 bg-white '>
        <div className='flex items-center font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E]' />
          <p> BookVerse </p>
        </div>
        <form className=' border border-gray-300 rounded-xl p-1 relative xl:w-5/12 w-full flex items-center xl:mx-0 mx-4'>
         <input type="text" className='outline-none w-full ml-2'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1A1A2E] absolute right-3' />
        </form>
        <div>
           <FontAwesomeIcon icon={faCircleUser} className='text-[#1A1A2E] ' />
        </div>
      </div>
    </>
  );
}

export default Header;
