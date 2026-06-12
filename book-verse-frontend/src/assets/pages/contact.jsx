import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header-component/header';
import Footer from '../components/footerComponents/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';

const Contact = () => {


  return (
    <>
      <Header />
      <div style={{ backgroundImage: 'url(/images/contact-hero.png)' }} className='bg-cover bg-center h-[80vh] relative bg-no-repeat xl:mt-20 mt-16'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-5'>
          <h1 className='text-white text-3xl xl:text-5xl font-bold'>Contact Us</h1>
          <p className='text-white/80 mt-3 max-w-2xl'>We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, send us a message.</p>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row'>
        <div className='xl:m-10 m-0  xl:p-10 p-5 xl:w-[50%] w-full shadow-2xl rounded'>
          <div className='space-y-2'>
            <div className='flex items-center gap-3 font-semibold'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p > Send Us A Message</p>
            </div>
            <p className='text-sm'> Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          <form className='grid space-y-5 mt-2 pt-3'>
            <div className='flex flex-col md:flex-row gap-5'>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-semibold text-sm'> Your Name</label>
                <input type="text" className='outline-none border border-gray-200 rounded w-full p-2' />
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label className='font-semibold text-sm'> Your Email</label>
                <input type="text" className='outline-none border border-gray-200 rounded w-full p-2' />
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
            <button className='bg-amber-700 p-2 w-full md:w-60 cursor-pointer rounded-lg font-semibold'> Send Message </button>
          </form>
        </div>
        <div className='xl:m-10 m-0  xl:p-10 p-5 xl:w-[50%] w-full shadow-2xl rounded'>
          <div className='mb-4 text-xs space-y-1'>
            <h3 className='text-xl'>
              Other ways to reach us:
            </h3>
            <p>
              You can connect to us through the channels below
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='flex gap-4 '>
              <div className='bg-amber-700 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faEnvelope}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Email Us
                </p>
                <p className='font-semibold'>
                  danejimofor@gmail.com
                </p>
                <p>
                  We usually reply within 24 hours
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-amber-700 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faPhone}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Call Us
                </p>
                <p className='font-semibold'>
                  +234 90 2032 4848
                </p>
                <p>
                  Mon - Fri, 9AM - 6PM (WAT)
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='bg-amber-700 p-3 flex h-full rounded items-center'>
                <FontAwesomeIcon icon={faPhone}
                  className=' text-2xl' />
              </div>
              <div className='text-xs space-y-1'>
                <p className='font-bold'>
                  Visit our Port folio
                </p>
                <a href="https://daniels-port-folio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex place-self-center bg-amber-600 hover:bg-amber-900 rounded p-2  mt-2 text-white cursor-pointer  justify-center font-semibold text-center '>
                  View PortFolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MobileNavBar />
    </>
  );
}

export default Contact;
