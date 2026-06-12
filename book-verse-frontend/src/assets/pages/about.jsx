import React from 'react';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';
import Value from '../components/value';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundImage: 'url(/images/about-us-hero.png)' }} className='bg-cover bg-center h-72 lg:h-[80vh] relative bg-no-repeat mt-16'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col xl:p-10 p-5 xl:w-[40%] w-full xl:space-y-5 space-y-3'>
          <span className='text-sm text-red-800 font-bold'>ABOUT US</span>
          <h1 className='text-white text-2xl xl:text-5xl font-bold'>Our story</h1>
          <p className='text-white xl:text-base text-xs'>Bookverse was born out of a simple belief - books have the power to inspire, educate, and transform lives.</p>
          <p className='text-white xl:text-base text-xs '> We created BookVerse to be more than just a place to read. It's a community for book lovers to discover and connect, and grow fast.</p>
          <button className='bg-amber-800 p-2 rounded w-60 cursor-pointer hover:bg-amber-950 font-semibold '>Explore Our Lirary</button>
        </div>
      </div>
      <div>
        <div className='flex flex-col space-y-3 justify-center items-center mt-5 '>
          <p className='text-red-800 font-bold text-sm'>WHAT WE STAND FOR </p>
          <p className='text-xl font-semibold '>Our Values</p>
        </div>
        <div className=' grid xl:grid-cols-4 grid-cols-2 justify-between place-items-center xl:px-15 px-0 py-5 xl:space-y-0 space-y-5 '>
          {
            Value.map((value) => (
              <div key={value.id} className='flex flex-col place-content-center items-center text-center w-[80%] shadow-xl p-3 h-52 rounded-xl space-y-3 bg-white dark:bg-gray-800 '>
                <div className='rounded-full p-2 bg-orange-200'> <FontAwesomeIcon icon={value.logo} className='text-orange-950' /> </div>
                <p className='font-semibold'>{value.topic}</p>
                <p className='xl:text-base text-xs'>{value.text}</p>
              </div>
            ))
          }
        </div>
        <div className='flex xl:flex-row flex-col-reverse justify-evenly xl:mx-15 mx-5 py-5' >
          <div className='flex xl:w-[50%] w-full ' >
            hello
          </div>
          <div className='flex  h-60 xl:w-[50%] w-full '>
            <img src={'/images/lady-reading.png'} className='w-full rounded-xl' />
          </div>
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default About;
