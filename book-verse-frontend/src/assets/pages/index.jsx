import React from 'react';
import Header from '../components/header-component/landing-header'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const Index = () => {

  const youAre = [{ id: 1, name: "Start Reading" }, { id: 2, name: "Publish" }]
  return (
    <>
      <Header />
      <div className='bg-cover bg-no-repeat bg-center flex xl:h-screen h-80 min-w-full relative rounded-b-lg border-b border-b-amber-200 shadow-2xl inset-0 ' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        <div className='absolute inset-0 bg-black/30 rounded-xl' />
        <div className='absolute inset-0 flex flex-col justify-center xl:ml-20 ml-5 text-white'>
          <h1 className='xl:text-4xl text-xl  font-bold'>Read More.</h1>
          <h1 className='xl:text-4xl text-xl font-bold'>Discover More.</h1>
          <div className='flex xl:text-base text-sm xl:space-x-6 space-x-2 mt-5'>
            {
              youAre.map((areYou) => (
                <Link to='/signIn' key={areYou.id} className='bg-white p-3 text-black rounded-lg cursor-pointer hover:bg-[#1B1F3B] hover:text-white font-semibold'>
                  {areYou.name}
                </Link>
              ))
            }
          </div>
        </div>

      </div>
      <div className='bg-[#FAF7F2] pt-5'>

        <h1 className='text-center xl:text-2xl text-base  font-semibold '>Everything you need in a reading App</h1>

      </div>
      <Footer />
    </>
  );
}

export default Index;
