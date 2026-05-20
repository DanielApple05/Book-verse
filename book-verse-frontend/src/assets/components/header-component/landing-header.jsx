import React from 'react';

const Header = () => {

  const Tabs = [{ id: 1, name: "Home" }, { id: 2, name: "Features" }, { id: 3, name: "Categories" }, { id: 4, name: "About" }]
  console.log(Tabs)

  return (
    <>
        <div className='flex justify-between p-5 border-b border-gray-200 fixed z-50 w-full bg-white'>
          <h1>
            Book Verse
          </h1>
          <div className='flex space-x-15 w-7/12 '>
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
