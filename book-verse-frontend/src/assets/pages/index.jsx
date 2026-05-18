import React from 'react';
import Header from '../components/header-component/header'
import { Link } from 'react-router-dom';

const Index = () => {

  const youAre = [{ id: 1, name: "Start Reading" }, { id: 2, name: "Publish" }]
  return (
    <>
      <Header />
      <div className='bg-cover bg-no-repeat bg-center flex h-screen min-w-full relative rounded-b-lg border-b border-b-amber-200 shadow-2xl' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        <div className='absolute inset-0 flex flex-col justify-center ml-20'>
          <h1 className='text-[40px] font-bold'>Read More.</h1>
          <h1 className='text-[40px] font-bold'>Discover More.</h1>
          <div className='flex space-x-6 mt-5'>
            {
              youAre.map((areYou) => (
                <Link to='/signIn' key={areYou.id} className='bg-white p-3 rounded-lg cursor-pointer hover:bg-[#1B1F3B] hover:text-white font-semibold'>
                  {areYou.name}
                </Link>
              ))
            }
          </div>
        </div>

      </div>
      <div className='bg-[#FAF7F2] pt-5'>

        <h1 className='text-center text-2xl font-semibold '>Everything you need in a reading App</h1>

      </div>

    </>
  );
}

export default Index;
