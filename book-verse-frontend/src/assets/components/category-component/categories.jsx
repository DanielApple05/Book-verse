import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {categoryTabs, iconColors} from './categoryTabs';
import { useNavigate, useLocation } from 'react-router-dom';

const Categories = () => {
   const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (tab) => {
    if (location.pathname === '/category') {
      const section = document.getElementById(tab);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/category/${tab}`);
    }
  };
  return (
    <div className='my-6 '>
      <h1 className='flex items-center text-lg font-semibold '>Popular Categories</h1>
      <div className='flex py-2 gap-3 w-full overflow-x-auto'>
        {categoryTabs.map((tab, index) => (
          <div
            onClick={() => handleClick(tab.tab)}
            key={tab.id}
            className='flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer min-w-24'
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColors[index]}`}>
              <FontAwesomeIcon icon={tab.icon}  className='text-sm' />
            </div>
            <span className='text-xs font-semibold text-gray-700 capitalize'>{tab.tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;