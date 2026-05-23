import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from '../navigations/navTabs'
import { NavLink } from 'react-router-dom';

const  MobileNavBar = () => {
  return (
     <div className='w-full bg-[#F9F6F1] flex xl:hidden'>
        <div className="space-x-4 flex w-full justify-around">
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
            </NavLink>
          ))}
        </div>
      </div>
  );
}

export default MobileNavBar;
