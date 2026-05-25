import React from 'react';
import { Link } from 'react-router-dom';


const Banner2 = () => {
  return (
    <div className='bg-cover bg-center h-72 relative my-6 bg-no-repeat w-full rounded-xl' style={{ backgroundImage: 'url(/images/banner-img2.png)' }}>
      <div className='absolute inset-0 bg-black/30 rounded-xl' />

      <div className='absolute flex flex-col inset-0 items-center justify-center xl:text-base text-sm xl:p-20 p-5'>
        <div>
          <p className='font-bold text-xl text-white'>Can't find what you're looking for?</p>
          <p className='text-white/80 text-sm mt-1'>Use our advanced search to find more books and authors</p>
        </div>
        <Link to='/discovery'  className='bg-black text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap mt-5'>
          Explore more books
        </Link>
      </div>
    </div>
  );
}

export default Banner2;