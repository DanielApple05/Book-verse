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
        <CategoryPageCard />
      </div>
      <Footer/>
      <MobileNavBar />
    </>
  );
}

export default Category;
