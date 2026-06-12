import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs from '../navigations/navTabs'
import { NavLink } from 'react-router-dom';
import Search from '../search';

const MobileNavBar = () => {

  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <div className='w-full dark:bg-gray-800 bg-[#F9F6F1] fixed bottom-0 flex xl:hidden dark:text-white p-3'>
      {searchOpen && (
        <>
          <div
            className="fixed inset-0"
            onClick={() => setSearchOpen(false)}
          />

          <div className="fixed bottom-20 left-0 right-0 z-50">
            <Search />
          </div>
        </>
      )}
      <div className="space-x-4 flex w-full justify-around">
        {Tabs.map(tab => (
          tab.action === "search" ? (
            <button
              key={tab.id}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className="text-xl" />
            </button>
          ) : (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-2 font-semibold xl:text-sm text-xs hover:bg-[#cd8f6b]
             ${tab.style || ""}
             ${isActive ? "bg-[#E8834A]" : ""}`

              }
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className="text-xl" />
            </NavLink>
          )
        ))}
      </div>
    </div>
  );
}

export default MobileNavBar;
