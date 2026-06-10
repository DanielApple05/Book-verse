import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';

const Contact = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundImage: 'url(/images/contact-hero.png)' }} className='bg-cover bg-center h-72 lg:h-[80vh] relative bg-no-repeat mt-15  '>
        <div className='absolute inset-0 bg-black/50 ' />
      </div>
      <div className='flex xl:flex-row flex-col'>
        <div className='xl:m-10 m-5 xl:p-10 p-5 xl:w-[50%] w-full shadow-2xl rounded'>
          <div className='space-y-2'>
            <div className='flex items-center gap-3 font-semibold'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p > Send Us A Message</p>
            </div>
            <p className='text-sm'> Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          <form className='grid space-y-5 mt-2 pt-3 '>
            <div className='flex justify-between gap-5 '>
              <div className='flex flex-col gap-2 '>
                <label className='font-semibold text-sm'> Your Name</label>
                <input type="text" className='outline-none border border-gray-200 rounded' />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm'> Your Email</label>
                <input type="text" className='outline-none border border-gray-200 rounded' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm'>
                Subject
              </label>
              <input type="text" className='outline-none border border-gray-200 rounded' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold text-sm'> Message</label>
              <textarea className='outline-none border border-gray-200 rounded h-32' />
            </div>
            <button className='bg-amber-700 p-2 w-60 cursor-pointer rounded-lg font-semibold'> Send Message </button>
          </form>
        </div>
        <div className='w-[50%]'>
          hello
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default Contact;
