import React from 'react';
import SideNavBar from '../components/sideNavBar';
import Header from '../components/header-component/header';
import CategoryPageCard from '../components/category-component/categoryPageCard'


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
    </>
  );
}

export default Category;
