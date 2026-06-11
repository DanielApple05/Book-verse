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
        <div className='absolute inset-0 flex flex-col px-5 w-[40%]'>
          <h1 className='text-white text-3xl xl:text-5xl font-bold'>Our story</h1>
          <p className='text-white/80 mt-3 max-w-2xl'>We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, send us a message.</p>
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default About;
