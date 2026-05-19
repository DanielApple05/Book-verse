import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from './navTabs'
import { NavLink } from "react-router-dom";

const sideNavBar = () => {
  return (
    <>
      <div className='w-2/12 h-screen bg-[#F5E6D0] flex justify-center'>
        <div className="space-y-4 p-4">
          {Tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-6 rounded-lg p-2 font-semibold text-xl ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
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

export default sideNavBar;
