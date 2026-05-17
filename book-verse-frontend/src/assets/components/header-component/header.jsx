import React from 'react';

const Header = () => {

  const Tabs = [{ id: 1, name: "Home" }, { id: 2, name: "Features" }, { id: 3, name: "Categories" }, { id: 4, name: "About" }]
  console.log(Tabs)

  return (
    <div>
      <div>
        <div className='flex justify-between p-3 border-b-2 border-gray-200 '>
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
        <div>
          <img src="/images/landing-page.png" alt="landing-page" className='bg-cover bg-no-repeat flex bg-center h-screen w-full' />
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
