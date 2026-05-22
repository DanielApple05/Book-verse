import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from './navTabs';
import { NavLink } from "react-router-dom";

const SideNavBar = () => {

  return (
    <>
      <div className='w-3/12 h-screen bg-[#F9F6F1] flex justify-center border-r border-gray-200 sticky top-0'>
        <div className="space-y-4 mt-20">
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
    </>
  );
}

export default SideNavBar;
