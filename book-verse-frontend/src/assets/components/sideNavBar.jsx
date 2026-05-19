import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from './navTabs'
import { NavLink } from "react-router-dom";

const sideNavBar = () => {
  return (
    <>
      <div className='w-2/12 h-screen bg-amber-50 flex justify-center'>
      <div className="space-y-4 p-4">
        {Tabs.map(tab => ( 
          <NavLink key={tab.id} className="flex items-center gap-6 bg-red-100 rounded-lg p-2 font-semibold text-xl">
            <FontAwesomeIcon icon={tab.icon} className="text-gray-500 text-xl"/>
            <span className="">{tab.name}</span>
          </NavLink>
        ))}
        </div>
      </div>
    </>
  );
}

export default sideNavBar;
