import React from 'react';
import Header from '../components/header-component/header';
import { Link } from 'react-router-dom';
import MobileNavBar from '../components/navigations/mobileNavBar';
import Footer from '../components/footerComponents/footer';

const Blog = () => {
  return (
    <>
     <Header /> 
      <div style={{ backgroundImage: 'url(/images/about-us-hero.png)' }} className='bg-cover bg-center h-72 lg:h-[80vh] relative bg-no-repeat mt-16'>
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex flex-col justify-center xl:p-10 p-5 xl:w-[40%] w-full xl:space-y-5 space-y-3'>
          <h1 className='text-white text-2xl xl:text-5xl font-bold'>Our Blog</h1>
          <p className='text-white xl:text-base text-xs'> Explore bookish insights, reading tips, author interviews, and everything for book lovers.</p>
          <Link to='/home' className='bg-amber-800 p-2 rounded w-20 text-center  cursor-pointer hover:bg-amber-950 font-bold '>Home</Link>
        </div>
      </div>
      <MobileNavBar />
      <Footer />
    </>
  );
}

export default Blog;
