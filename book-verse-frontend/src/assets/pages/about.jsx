import React from 'react';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';


const About = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundImage: 'url(/images/about-us-hero.png)' }} className='bg-cover bg-center h-72 lg:h-[80vh] relative bg-no-repeat mt-16'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col p-10 w-[40%] space-y-5'>
          <span className='text-sm text-red-800 font-bold'>ABOUT US</span>
          <h1 className='text-white text-3xl xl:text-5xl font-bold'>Our story</h1>
          <p className='text-white/80 mt-3 max-w-2xl'>Bookverse was born out of a simple belief - books have the power to inspire, educate, and transform lives.</p>
          <p> We created BookVerse to be more than just a place to read. It's a community for book lovers to discover and connect, and grow fast.</p>
          <button className='bg-amber-800 p-2 rounded w-60 cursor-pointer hover:bg-amber-950 '>Explore Our Lirary</button>
        </div>
      </div>
      <div>
        <div className='flex flex-col space-y-3 justify-center items-center '>
          <p className='text-red-800 font-bold text-sm'>WHAT WE STAND FOR </p>
          <p className='text-xl font-semibold '>Our Values</p>
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default About;
