import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import categoryTabs from './categoryTabs';

const iconColors = [
  'bg-[#F5E6D0] text-[#E8834A]',
  'bg-[#D6EAD8] text-green-600',
  'bg-[#E8E4F5] text-purple-500',
  'bg-[#F5E0E0] text-red-400',
  'bg-[#E6F1FB] text-blue-500',
  'bg-[#FAEEDA] text-yellow-600',
  'bg-pink-100 text-pink-500',
  'bg-gray-100 text-gray-600',
];

const Categories = () => {
  return (
    <div className='my-6 '>
      <h1 className='flex items-center text-lg font-semibold '>Popular Categories</h1>
      <div className='flex py-2 gap-3 w-full overflow-x-auto'>
        {categoryTabs.map((tab, index) => (
          <div
            key={tab.id}
            className='flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer min-w-24'
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColors[index]}`}>
              <FontAwesomeIcon icon={tab.icon} className='text-sm' />
            </div>
            <span className='text-xs font-semibold text-gray-700 capitalize'>{tab.tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;