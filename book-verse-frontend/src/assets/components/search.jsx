import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <>
      <form className=' border border-gray-300 rounded-xl p-1 relative xl:w-5/12 w-full flex items-center  '>
        <input type="text" className='outline-none w-full ml-2' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1A1A2E] absolute right-3' />
      </form>
    </>
  );
}

export default Search;
