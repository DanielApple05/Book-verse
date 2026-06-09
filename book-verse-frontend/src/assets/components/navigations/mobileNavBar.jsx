import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from '../navigations/navTabs'
import { NavLink } from 'react-router-dom';

const  MobileNavBar = () => {
  return (
     <div className='w-full dark:bg-gray-800 bg-[#F9F6F1] fixed bottom-0 flex xl:hidden dark:text-white p-3'>
        <div className="space-x-4 flex w-full justify-around">
          {Tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-2 font-semibold xl:text-sm text-xs hover:bg-[#cd8f6b]  ${isActive ? 'bg-[#E8834A]' : ''
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
