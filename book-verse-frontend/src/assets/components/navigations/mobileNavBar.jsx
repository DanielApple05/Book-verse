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
            className="fixed inset-0 bg-black/30"
            onClick={() => setSearchOpen(false)}
          />
          <div className="fixed bottom-20 left-4 right-4 z-50 bg-white m-5 rounded-lg">
            <Search />
          </div>
        </>
      )}
      <div className="space-x-4 flex w-full justify-around items-center">
        {Tabs.map(tab => (
          tab.action === "search" ? (
            <button
              key={tab.id}
              onClick={() => setSearchOpen(!searchOpen)}
              className={tab.style || ""}
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className={`text-xl  ${ searchOpen ? "overflow-hidden" : "" }`} />
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
