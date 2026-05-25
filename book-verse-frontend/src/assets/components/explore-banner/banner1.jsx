import React from 'react';
import { Link } from 'react-router-dom';


const Banner1 = () => {
  return (
    <div className='bg-cover bg-center h-72 relative my-6 bg-no-repeat w-full rounded-xl' style={{ backgroundImage: 'url(/images/banner-img1.png)' }}>
      <div className='absolute inset-0 bg-black/30 rounded-xl' />
      <div className='absolute inset-0 flex  flex-col items-center justify-center xl:px-10 px-2 xl:text-base text-sm'>
        <div className='xl:text-xl text-sm'>
          <p className='font-bold text-center text-white'>Keep Reading, Keep Growing</p>
          <p className='text-white/80 mt-1'>You're doing great, many more adventures ahead</p>
        </div>
        <Link to='/category' 
        className='bg-black text-white xl:px-6 px-2 py-3 xl:text-base text-xs cursor-pointer rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap mt-5 '>
            Explore more books
          category
        </Link>
      </div>
    </div>
  );
}

export default Banner1;
