import React from 'react';
import { Bookmark, ChartNoAxesColumnIncreasing, Heart, LibraryBig } from 'lucide-react';

const brandServices = () => {
  return (
    <>
      <div>
        <div>
          <h2 className='text-[26px] font-black text-center mt-7'>Everything you need in a reading app</h2>
          <div className='flex justify-around text-center mt-5 xl:flex-row flex-col gap-10'>
            <div>
              <div className='flex justify-center'>
                <LibraryBig />
              </div>
              <p className='font-bold text-sm'>Vast Collection</p>
              <p className='text-xs w-[50%] mx-auto'>Access thousand of books across all genres and topics</p>
            </div>

            <div>
              <div className='flex justify-center'>
                <Bookmark className='text-[#024902]' fill='currentColor' />
              </div>
              <p className='font-bold text-sm'>Vast Collection</p>
              <p className='text-xs w-[50%] mx-auto'>Access thousand of books across all genres and topics</p>
            </div>

            <div>
              <div className='flex justify-center'>
                <ChartNoAxesColumnIncreasing className='text-blue-950' />
              </div>
              <p className='font-bold text-sm'>Vast Collection</p>
              <p className='text-xs w-[50%] mx-auto'>Access thousand of books across all genres and topics</p>
            </div>

            <div>
              <div className='flex justify-center'>
                <Heart className='text-red-400' fill='currentColor' />
              </div>
              <p className='font-bold text-sm'>Vast Collection</p>
              <p className='text-xs w-[50%] mx-auto'>Access thousand of books across all genres and topics</p>
            </div>
          </div>

          <div className='grid-cols-4'>
            {}
          </div>
        </div>
      </div>
    </>
  );
}

export default brandServices;
