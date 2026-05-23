import React from 'react';
import SideNavBar from '../components/navigations/sideNavBar';
import Header from '../components/header-component/header';
import CategoryPageCard from '../components/category-component/categoryPageCard';
import Footer from '../components/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';


const Category = () => {
  return (
    <>
      <Header />
      <div className='flex w-full'>
        <SideNavBar />
        <div className=' mt-20 p-5 w-full '>
          <p className='text-2xl font-bold'>Categories</p>
          <p>Explore books by categories and find your next favorite read</p>
           <CategoryPageCard />
        </div>
      </div>
      <MobileNavBar />
      <Footer/>
    </>
  );
}

export default Category;
