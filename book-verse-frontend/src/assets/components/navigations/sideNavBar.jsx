import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from './navTabs';
import { NavLink } from "react-router-dom";

const SideNavBar = () => {

  return (
    <>
      <div className='w-3/12 h-screen dark:bg-gray-800 bg-[#F9F6F1] xl:flex hidden justify-center border-r dark:text-gray-200 text-black border-gray-200 sticky top-0'>
        <div className="space-y-4 mt-25">
          {Tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-2 font-semibold xl:text-sm text-xs hover:bg-[#cd8f6b]  ${isActive ? 'bg-[#E8834A] text-white' : ' '
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
