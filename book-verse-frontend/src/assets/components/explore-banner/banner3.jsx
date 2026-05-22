import React from 'react';

const Banner3 = () => {
  return (
      <div className='bg-cover bg-center h-72 relative my-6 bg-no-repeat w-full rounded-xl' style={{ backgroundImage: 'url(/images/banner-img3.png)' }}>
      <div className='absolute inset-0 bg-black/30 rounded-xl' />

      <div className='absolute flex flex-col p-20 items-center'>
        <div>
          <p className='font-bold text-xl text-white'>Find books that speaks to you</p>
          <p className='text-white/80 text-sm mt-1'>Personalized pick, based on your reading habit</p>
        </div>
        <button className='bg-black text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap mt-5'>
          Explore Recommendations
        </button>
      </div>
    </div>
  );
}

export default Banner3;
