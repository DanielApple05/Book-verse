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
      <form className=' border border-gray-300 rounded-xl p-1 relative xl:w-5/12 w-full flex items-center  ' onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='outline-none w-full ml-2' />
        <FontAwesomeIcon icon={faMagnifyingGlass} onSubmit={handleSubmit} className='text-[#1A1A2E] absolute right-3' />
      </form>
    </>
  );
}

export default Search;
