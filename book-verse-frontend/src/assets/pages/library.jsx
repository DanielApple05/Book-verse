import React from 'react';
import SideNavBar from '../components/navigations/sideNavBar';
import Header from '../components/header-component/header';
import Footer from '../components/footer';
import MobileNavBar from '../components/navigations/mobileNavBar';
// import LibraryCard from '../components/library-component/libraryCard'

const Library = () => {
  return (
    <>
      <Header />
      <div className='flex w-full'>
        <SideNavBar />
        <div className='bg-red-200 mt-20 p-5 w-full '>
          <p className='text-2xl font-bold'>My Library</p>
          <p>All your books in one place</p>
           {/* <LibraryCard /> */}
        </div>
      </div>
      <MobileNavBar />
      <Footer/>
    </>
  );
}

export default Library;
