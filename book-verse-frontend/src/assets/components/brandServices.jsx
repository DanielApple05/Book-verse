import React from 'react';
import { Bookmark, ChartNoAxesColumnIncreasing, Heart, LibraryBig } from 'lucide-react';

const brandServices = () => {
  return (
    <>
      <div className='  border-b border-b-gray-200 w-11/12 mx-auto  '>
        <h2 className='text-[26px] font-black text-center my-10 '>Everything you need in a reading app</h2>
        <div className='xl:flex grid grid-cols-2 justify-around text-center mt-5 gap-10 mb-10'>
          <div className='flex flex-col place-items-center'>
            <LibraryBig className=' text-[#E8834A] bg-[#F5E6D0] h-10 w-10 p-2 rounded-xl ' />
            <p className='font-bold text-sm my-2'>Vast Collection</p>
            <p className='text-xs w-[50%] mx-auto'>Access thousand of books across all genres and topics</p>
          </div>

          <div className='flex flex-col place-items-center'>
            <div className='  bg-[#D6EAD8] rounded-xl p-2'>
              <Bookmark className='text-[#066706]' fill='currentColor h-10 w-10' />
            </div>
            <p className='font-bold text-sm my-2'>Track Progress</p>
            <p className='text-xs w-[50%]  mx-auto'>Track your reading progress and set goals to stay consistent. </p>
          </div>

          <div className='flex flex-col place-items-center'>
            <div className='p-2 rounded-xl bg-blue-200 '>
              <ChartNoAxesColumnIncreasing className='text-blue-950  w-5 h-5' />
            </div>
            <p className='font-bold text-sm my-2'> Reading Insights</p>
            <p className='text-xs w-[50%]  mx-auto'> Get insights about your reading habits and time spent. </p>
          </div>

          <div className='flex flex-col place-items-center'>
            <div className=' rounded-xl p-2 bg-red-100'>
              <Heart className='text-red-400' fill='currentColor' />
            </div>
            <p className='font-bold text-sm my-2'> personalized</p>
            <p className='text-xs w-[50%]  mx-auto'>Get personalized recommendations based on your taste</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default brandServices;
