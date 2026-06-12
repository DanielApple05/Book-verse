import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };
  return (
    <>
      <div className='flex xl:w-5/6 w-full justify-center'>
        <form className=' border border-gray-300 rounded-xl p-1 relative xl:w-5/12 w-full flex items-center  ' onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none w-full ml-2 placeholder:text-sm p-1 text-base dark:placeholder:text-gray-400 placeholder:text-black '
            placeholder='Search books, genres or authors...' />
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSubmit} className=' cursor-pointer dark:text-gray-400 text-[#1A1A2E] text-xl absolute right-3' />
        </form>
      </div>
    </>
  );
}

export default Search;
