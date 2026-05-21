import React from 'react';

const  MobileNavBar = () => {
  return (
     <div className='min-w-2/12 h-screen bg-[#F9F6F1] flex justify-center sticky z-0 top-5 '>
        <div className="space-y-4 flex mt-20">
          {Tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-2 font-semibold xl:text-sm text-xs hover:bg-blue-300  ${isActive ? 'bg-blue-500 text-white' : ' text-gray-700'
                }`
              }
            >
              <FontAwesomeIcon icon={tab.icon} className="text-xl" />
              <span>{tab.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
  );
}

export default MobileNavBar;
