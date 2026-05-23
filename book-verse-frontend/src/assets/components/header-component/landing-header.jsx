import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const Tabs = [{ id: 1, name: "Home" }, { id: 2, name: "Features" }, { id: 3, name: "Categories" }, { id: 4, name: "About" }]
  console.log(Tabs)

  return (
    <>
      <div className='flex justify-between p-5 border-b border-gray-200 fixed z-50 w-full bg-white'>
        <div className='flex items-center font-bold space-x-2'>
          <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1A2E]' />
          <p> BookVerse </p>
        </div>
        <div className=' xl:flex hidden space-x-15 w-7/12 '>
          {
            Tabs.map((tab) => (
              <div key={tab.id} className='font-bold'>
                <p className='cursor-pointer'>
                  {tab.name}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Header;
