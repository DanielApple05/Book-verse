import React from 'react';
import Header from '../components/header-component/header'

const Index = () => {
  return (
    <>
      <Header />
      <div className='bg-cover bg-no-repeat bg-center flex h-screen min-w-full relative' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        <div className='absolute inset-0 flex flex-col justify-center'>
          <h1 className='text-[40px] font-bold'>Read More</h1>
          <h1 className='text-[40px] font-bold'>Discover More</h1>
        </div>
      </div>

    </>
  );
}

export default Index;
