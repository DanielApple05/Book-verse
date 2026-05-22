import React from 'react';

const Branding = () => {
  return (
    <div className='bg-cover bg-center h-72 relative my-6 bg-no-repeat w-full rounded-xl' style={{ backgroundImage: 'url(/images/brand.png)' }}>
      <div className='absolute inset-0 bg-black/30 rounded-xl' />

      <div className='absolute inset-0 flex items-center justify-between px-10'>
        <div>
          <p className='font-bold text-xl text-white'>Keep Reading, Keep Growing</p>
          <p className='text-white/80 text-sm mt-1'>You're doing great, many more adventures ahead</p>
        </div>
        <button className='bg-black text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap'>
          Explore more books
        </button>
      </div>
    </div>
  );
}

export default Branding;
